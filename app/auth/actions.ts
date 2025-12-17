"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error);
    return { error: "Could not authenticate user" };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("fullName") as string;
  const referralCode = formData.get("referralCode") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  if (!email || !password || !fullName) {
    return { error: "Missing required fields" };
  }

  // 1. Check referral code if provided
  let referrerId = null;
  if (referralCode) {
    // Attempt to find user by referral code (assuming it maps to username or email or specific code)
    // For now, let's assume valid 'username' is the referral code or we check public.profiles
    // Note: This relies on a 'profiles' table existing.

    // WARNING: This assumes a 'profiles' table with 'username' or 'referral_code' column.
    // Based on requirements, referral code could be username/email.
    // We will search by email for now as a fallback or if 'username' exists.

    // Check if we can search by username in profiles
    const { data: referrer, error: referrerError } = await supabase
      .from("profiles")
      .select("id")
      .eq("username", referralCode) // Assuming username is used closely as ref code
      .single();

    if (referrer) {
      referrerId = referrer.id;
    } else {
      // Fallback or ignore? Requirements said: "Search DB for the referrer's ID based on the input code."
      // We will proceed without it if invalid, or could error.
      // Let's log it.
      console.warn("Invalid referral code:", referralCode);
    }
  }

  // 2. Sign up
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        // We can pass referrer_id here if we have a trigger to handle it,
        // OR we update profiles after.
        // The requirements said: "Step 3 (Post-Signup): If a referrer existed, update the new user's profile"
      },
    },
  });

  if (authError) {
    console.error("Signup error:", authError);
    return { error: authError.message };
  }

  // 3. Update profile with referrer if needed
  if (authData.user && referrerId) {
    // The profile is created by the trigger, so we can update it directly
    const { error: profileError } = await supabase
      .from("profiles")
      .update({ referrer_id: referrerId })
      .eq("id", authData.user.id);

    if (profileError) {
      console.error("Failed to link referrer:", profileError);
    }
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/login?success=Logged out successfully");
}
