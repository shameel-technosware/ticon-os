"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { IconPlus, IconPencil, IconLoader2 } from "@tabler/icons-react";

interface Contact {
  id?: number;
  name: string;
  contact_number: string;
  email?: string;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contact?: Contact | null;
  onSave: () => void;
}

export default function ContactFormDialog({
  open,
  onOpenChange,
  contact,
  onSave,
}: ContactFormDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact_number: "",
    email: "",
    notes: "",
  });

  // Update form data when contact prop changes (for editing)
  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.name || "",
        contact_number: contact.contact_number || "",
        email: contact.email || "",
        notes: contact.notes || "",
      });
    } else {
      // Reset form for new contact
      setFormData({
        name: "",
        contact_number: "",
        email: "",
        notes: "",
      });
    }
  }, [contact]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // If this is the contact number field, only allow phone number characters
    if (name === "contact_number") {
      // Allow only numbers, +, -, (, ), and space
      const phoneNumberRegex = /^[0-9+\-\s()]*$/;
      if (!phoneNumberRegex.test(value)) {
        return; // Ignore invalid characters
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.contact_number.trim()) {
      newErrors.contact_number = "Phone number is required";
    } else {
      // Basic phone number validation
      const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
      if (!phoneRegex.test(formData.contact_number.trim())) {
        newErrors.contact_number = "Please enter a valid phone number";
      }
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check for duplicate phone numbers
  const checkForDuplicatePhone = async (
    phone: string,
    excludeId?: number
  ): Promise<boolean> => {
    const { data, error } = await supabase
      .from("contacts")
      .select("id")
      .eq("contact_number", phone)
      .neq("id", excludeId || -1); // Exclude the current contact when editing

    if (error) {
      console.error("Error checking for duplicate phone:", error);
      return false;
    }

    return data.length > 0;
  };

  // Submit form (create or update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      // Check for duplicate phone number
      const isDuplicate = await checkForDuplicatePhone(
        formData.contact_number.trim(),
        contact?.id
      );

      if (isDuplicate) {
        setErrors({
          contact_number: "A contact with this phone number already exists",
        });
        setLoading(false);
        return;
      }

      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        toast.error("You must be logged in to manage contacts");
        setLoading(false);
        return;
      }

      let result;
      if (contact?.id) {
        // Update existing contact
        result = await supabase
          .from("contacts")
          .update({
            ...formData,
            contact_number: formData.contact_number.trim(),
            email: formData.email.trim() || null,
            notes: formData.notes.trim() || null,
            updated_at: new Date().toISOString(),
          })
          .eq("id", contact.id);
      } else {
        // Create new contact
        result = await supabase.from("contacts").insert([
          {
            ...formData,
            contact_number: formData.contact_number.trim(),
            email: formData.email.trim() || null,
            notes: formData.notes.trim() || null,
            created_by: user.data.user.id,
          },
        ]);
      }

      if (result.error) throw result.error;

      toast.success(
        contact?.id
          ? "Contact updated successfully"
          : "Contact created successfully"
      );

      // Reset form and close modal
      setFormData({ name: "", contact_number: "", email: "", notes: "" });
      setErrors({});
      onOpenChange(false);

      // Refresh contacts list
      onSave();
    } catch (error: any) {
      console.error("Error saving contact:", error);
      toast.error(
        contact?.id ? "Failed to update contact" : "Failed to create contact",
        { description: error.message || error.toString() }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="gradient-text">
            {contact?.id ? "Edit Contact" : "Add New Contact"}
          </DialogTitle>
          <DialogDescription>
            {contact?.id
              ? "Update the contact information below."
              : "Enter the contact information to add a new contact."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
              {errors.name && (
                <div className="col-start-2 col-span-3 text-red-500 text-sm">
                  {errors.name}
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="contact_number" className="text-right">
                Phone Number *
              </Label>
              <Input
                id="contact_number"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
              {errors.contact_number && (
                <div className="col-start-2 col-span-3 text-red-50 text-sm">
                  {errors.contact_number}
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="col-span-3"
              />
              {errors.email && (
                <div className="col-start-2 col-span-3 text-red-50 text-sm">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Notes
              </Label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange as any}
                className="col-span-3 border border-input rounded-md px-3 py-2"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
                  {contact?.id ? "Updating..." : "Creating..."}
                </>
              ) : (
                <>{contact?.id ? "Update Contact" : "Create Contact"}</>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
