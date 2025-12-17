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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  IconPlus,
  IconPencil,
  IconLoader2,
  IconAlertCircle,
  IconX,
} from "@tabler/icons-react";

interface Project {
  id?: number;
  title: string;
  description?: string;
  status: string;
  created_by?: string;
  created_at?: string;
  updated_at?: string;
  project_contacts?: Array<{
    id?: number;
    contact_id: number;
    relationship_type: string;
    priority_order: number;
    contacts: {
      id: number;
      name: string;
      contact_number: string;
      email: string;
    };
  }>;
}

interface Contact {
  id: number;
  name: string;
  contact_number: string;
  email?: string;
}

interface ProjectFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: Project | null;
  onSave: () => void;
}

export default function ProjectFormDialog({
  open,
  onOpenChange,
  project,
  onSave,
}: ProjectFormDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  // Contact selection state
  const [selectedContacts, setSelectedContacts] = useState<
    Array<{
      contactId: number;
      relationshipType: string;
      priority: number;
    }>
  >([]);

  // Available contacts for selection
  const [availableContacts, setAvailableContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [contactSearch, setContactSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const supabase = createClient();

  // Update form data when project prop changes (for editing)
  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        description: project.description || "",
        status: project.status || "pending",
      });

      // Set selected contacts from project if editing
      if (project.project_contacts && project.project_contacts.length > 0) {
        const contacts = project.project_contacts
          .sort((a, b) => a.priority_order - b.priority_order) // Sort by priority
          .map((pc, index) => ({
            contactId: pc.contact_id,
            relationshipType: pc.relationship_type || "team_member",
            priority: pc.priority_order,
          }));
        setSelectedContacts(contacts);
      } else {
        setSelectedContacts([]);
      }
    } else {
      // Reset form for new project
      setFormData({
        title: "",
        description: "",
        status: "pending",
      });
      setSelectedContacts([]);
    }
  }, [project]);

  // Load contacts when dialog opens
  useEffect(() => {
    if (open) {
      loadContacts();
    }
  }, [open]);

  // Filter contacts based on search
  useEffect(() => {
    if (contactSearch.trim() === "") {
      setFilteredContacts(availableContacts);
    } else {
      const searchLower = contactSearch.toLowerCase();
      setFilteredContacts(
        availableContacts.filter(
          (contact) =>
            contact.name.toLowerCase().includes(searchLower) ||
            contact.contact_number.toLowerCase().includes(searchLower) ||
            (contact.email && contact.email.toLowerCase().includes(searchLower))
        )
      );
    }
  }, [contactSearch, availableContacts]);

  // Load all contacts from database
  const loadContacts = async () => {
    try {
      const { data, error } = await supabase
        .from("contacts")
        .select("id, name, contact_number, email")
        .order("name", { ascending: true });

      if (error) throw error;

      setAvailableContacts(data || []);
      setFilteredContacts(data || []);
    } catch (error: any) {
      console.error("Error loading contacts:", error);
      toast.error("Failed to load contacts");
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle contact selection
  const handleAddContact = (contactId: number) => {
    // Check if contact is already selected
    if (selectedContacts.some((sc) => sc.contactId === contactId)) {
      toast.error("This contact is already added to the project");
      return;
    }

    // Create new contact entry with next priority
    const newPriority = selectedContacts.length + 1;
    const newContact = {
      contactId,
      relationshipType: "team_member", // Default relationship type
      priority: newPriority,
    };

    setSelectedContacts([...selectedContacts, newContact]);
    setContactSearch(""); // Clear search after adding
  };

  // Remove contact from selection
  const handleRemoveContact = (contactId: number) => {
    const updatedContacts = selectedContacts
      .filter((sc) => sc.contactId !== contactId)
      .map((sc, index) => ({
        ...sc,
        priority: index + 1, // Reorder priorities
      }));

    setSelectedContacts(updatedContacts);
  };

  // Update relationship type for a contact
  const handleRelationshipChange = (contactId: number, newType: string) => {
    const updatedContacts = selectedContacts.map((sc) =>
      sc.contactId === contactId ? { ...sc, relationshipType: newType } : sc
    );
    setSelectedContacts(updatedContacts);
  };

  // Submit form (create or update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        toast.error("You must be logged in to manage projects");
        setLoading(false);
        return;
      }

      let result;
      if (project?.id) {
        // Update existing project
        result = await supabase
          .from("projects")
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq("id", project.id);

        if (result.error) throw result.error;

        // Delete existing project contacts
        await supabase
          .from("project_contacts")
          .delete()
          .eq("project_id", project.id);

        // Insert new project contacts
        if (selectedContacts.length > 0) {
          const projectContacts = selectedContacts.map((sc) => ({
            project_id: project.id,
            contact_id: sc.contactId,
            relationship_type: sc.relationshipType,
            priority_order: sc.priority,
          }));

          const { error: contactsError } = await supabase
            .from("project_contacts")
            .insert(projectContacts);

          if (contactsError) throw contactsError;
        }
      } else {
        // Create new project
        const { data: newProject, error: projectError } = await supabase
          .from("projects")
          .insert([
            {
              ...formData,
              created_by: user.data.user.id,
            },
          ])
          .select("id")
          .single();

        if (projectError) throw projectError;

        // Insert project contacts
        if (selectedContacts.length > 0) {
          const projectContacts = selectedContacts.map((sc) => ({
            project_id: newProject.id,
            contact_id: sc.contactId,
            relationship_type: sc.relationshipType,
            priority_order: sc.priority,
          }));

          const { error: contactsError } = await supabase
            .from("project_contacts")
            .insert(projectContacts);

          if (contactsError) throw contactsError;
        }
      }

      toast.success(
        project?.id
          ? "Project updated successfully"
          : "Project created successfully"
      );

      // Reset form and close modal
      setFormData({ title: "", description: "", status: "pending" });
      setSelectedContacts([]);
      setErrors({});
      onOpenChange(false);

      // Refresh projects list
      onSave();
    } catch (error: any) {
      console.error("Error saving project:", error);
      toast.error(
        project?.id ? "Failed to update project" : "Failed to create project",
        { description: error.message || error.toString() }
      );
    } finally {
      setLoading(false);
    }
  };

  // Get contact name by ID
  const getContactName = (contactId: number) => {
    const contact = availableContacts.find((c) => c.id === contactId);
    return contact ? contact.name : "Unknown Contact";
  };

  // Log selected contacts for debugging
  useEffect(() => {
    if (selectedContacts.length > 0) {
      console.log("Selected contacts updated:", selectedContacts);
    }
  }, [selectedContacts]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="gradient-text">
            {project?.id ? "Edit Project" : "Add New Project"}
          </DialogTitle>
          <DialogDescription>
            {project?.id
              ? "Update the project information below."
              : "Enter the project information to add a new project."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title *
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
              {errors.title && (
                <div className="col-start-2 col-span-3 text-red-500 text-sm flex items-center">
                  <IconAlertCircle className="h-4 w-4 mr-1 text-red-500" />
                  {errors.title}
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="col-span-3 border border-input rounded-md px-3 py-2"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Contact Selection Section */}
            <div className="grid grid-cols-4 items-start gap-4 pt-4">
              <Label className="text-right">Contacts</Label>
              <div className="col-span-3 space-y-4">
                {/* Selected Contacts List */}
                {selectedContacts.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Selected Contacts:</h4>
                    <div className="border rounded-md p-3 max-h-40 overflow-y-auto">
                      {selectedContacts
                        .sort((a, b) => a.priority - b.priority) // Sort by priority
                        .map((sc) => (
                          <div
                            key={sc.contactId}
                            className="flex items-center justify-between p-2 border-b"
                          >
                            <div className="flex items-center">
                              <span className="font-medium mr-2">
                                {sc.priority}. {getContactName(sc.contactId)}
                              </span>
                              <Select
                                value={sc.relationshipType}
                                onValueChange={(value) =>
                                  handleRelationshipChange(sc.contactId, value)
                                }
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="primary">
                                    Primary
                                  </SelectItem>
                                  <SelectItem value="secondary">
                                    Secondary
                                  </SelectItem>
                                  <SelectItem value="manager">
                                    Manager
                                  </SelectItem>
                                  <SelectItem value="team_member">
                                    Team Member
                                  </SelectItem>
                                  <SelectItem value="client">Client</SelectItem>
                                  <SelectItem value="vendor">Vendor</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveContact(sc.contactId)}
                            >
                              <IconX className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Contact Search and Selection */}
                <div className="space-y-2">
                  <h4 className="font-medium">Add Contact:</h4>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Search contacts..."
                      value={contactSearch}
                      onChange={(e) => setContactSearch(e.target.value)}
                      className="flex-1"
                    />
                  </div>

                  {/* Available Contacts List */}
                  {filteredContacts.length > 0 && (
                    <div className="border rounded-md p-3 max-h-40 overflow-y-auto">
                      {filteredContacts
                        .filter(
                          (contact) =>
                            !selectedContacts.some(
                              (sc) => sc.contactId === contact.id
                            )
                        )
                        .map((contact) => (
                          <div
                            key={contact.id}
                            className="flex items-center justify-between p-2 hover:bg-accent rounded cursor-pointer"
                            onClick={() => handleAddContact(contact.id)}
                          >
                            <div>
                              <div className="font-medium">{contact.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {contact.contact_number}{" "}
                                {contact.email && `• ${contact.email}`}
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddContact(contact.id);
                              }}
                            >
                              <IconPlus className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
                  {project?.id ? "Updating..." : "Creating..."}
                </>
              ) : (
                <>{project?.id ? "Update Project" : "Create Project"}</>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
