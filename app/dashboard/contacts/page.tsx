"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IconPlus } from "@tabler/icons-react";
import ContactTable from "./_components/contact-table";
import ContactFormDialog from "./_components/contact-form-dialog";

interface Contact {
  id: number;
  name: string;
  contact_number: string;
  email: string;
  notes: string;
  created_at: string;
  updated_at: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const supabase = createClient();

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setContacts(data || []);
    } catch (error: any) {
      console.error("Error fetching contacts:", error);
      toast.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Edit contact
  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setIsModalOpen(true);
  };

  // Delete contact
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;

    try {
      const { error } = await supabase.from("contacts").delete().eq("id", id);

      if (error) throw error;

      toast.success("Contact deleted successfully");
      fetchContacts();
    } catch (error: any) {
      console.error("Error deleting contact:", error);
      toast.error("Failed to delete contact");
    }
  };

  // Handle save (create or update)
  const handleSave = () => {
    setIsModalOpen(false);
    setEditingContact(null);
    fetchContacts();
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight gradient-text">
            Contacts
          </h1>
          <p className="text-muted-foreground mt-2">Manage your contact list</p>
        </div>
        <Button
          onClick={() => {
            setEditingContact(null);
            setIsModalOpen(true);
          }}
          variant="gradient"
        >
          <IconPlus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      <ContactTable
        contacts={contacts}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ContactFormDialog
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        contact={editingContact}
        onSave={handleSave}
      />
    </div>
  );
}
