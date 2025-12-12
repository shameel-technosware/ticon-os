"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    try {
      // Step 1: Search for referrer if referral code is provided
      let referrerId = null;
      if (referralCode) {
        const { data: referrerProfile, error: referrerError } = await supabase
          .from("profiles")
          .select("id")
          .or(`email.eq.${referralCode},full_name.eq.${referralCode}`)
          .single();

        if (referrerError) {
          console.error("Error finding referrer:", referrerError);
        } else if (referrerProfile) {
          referrerId = referrerProfile.id;
        } else {
          alert("Referral code not found. Proceeding without referral.");
        }
      }

      // Step 2: Sign up the user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        throw error;
      }

      // Step 3: If a referrer was found, update the new user's profile with referrer_id
      if (referrerId && data.user) {
        const { error: profileUpdateError } = await supabase
          .from("profiles")
          .update({ referrer_id: referrerId })
          .eq("id", data.user.id);

        if (profileUpdateError) {
          console.error(
            "Error updating profile with referrer_id:",
            profileUpdateError
          );
        }
      }

      // Redirect to dashboard after successful signup
      router.push("/dashboard");
      router.refresh();
    } catch (error: any) {
      console.error("Signup error:", error);
      alert(
        error.error_description ||
          error.message ||
          "An error occurred during signup"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="referral-code">
                  Referral Code (Optional)
                </FieldLabel>
                <Input
                  id="referral-code"
                  type="text"
                  placeholder="Enter referral code"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                />
                <FieldDescription>
                  Enter the referral code of the person who invited you
                  (optional)
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={loading}>
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <a href="/login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
