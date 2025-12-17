"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { IconPlus, IconSearch } from "@tabler/icons-react";
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
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: "created_at" | "name" | "contact_number";
    direction: "asc" | "desc";
  } | null>(null);

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
      setFilteredContacts(data || []); // Initialize filtered contacts
    } catch (error: any) {
      console.error("Error fetching contacts:", error);
      toast.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  // Function to sort contacts
  const sortContacts = (contactsToSort: Contact[]) => {
    if (!sortConfig) return contactsToSort;

    const sortedContacts = [...contactsToSort];
    sortedContacts.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sortedContacts;
  };

  // Filter and sort contacts based on search term and sort config
  useEffect(() => {
    let result = [...contacts];

    // Apply search filter
    if (searchTerm.trim() !== "") {
      result = result.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.contact_number
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          (contact.email &&
            contact.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (contact.notes &&
            contact.notes.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply sorting
    if (sortConfig) {
      result = sortContacts(result);
    }

    setFilteredContacts(result);
  }, [searchTerm, sortConfig, contacts]);

  // Handle sorting
  const handleSort = (key: "created_at" | "name" | "contact_number") => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
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
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight gradient-text">
              Contacts
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your contact list
            </p>
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

        {/* Search Bar */}
        <div className="relative max-w-sm">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <IconSearch className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Search contacts..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <ContactTable
        contacts={filteredContacts}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSort={handleSort}
        sortConfig={sortConfig}
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
