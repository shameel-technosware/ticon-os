"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  IconPencil,
  IconTrash,
  IconBriefcase,
  IconLoader2,
} from "@tabler/icons-react";

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  project_contacts: Array<{
    id: number;
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

interface ProjectTableProps {
  projects: Project[];
  loading: boolean;
  onEdit: (project: Project) => void;
  onDelete: (id: number, title: string) => void;
  onSort?: (key: "created_at" | "title" | "status") => void;
  sortConfig?: {
    key: "created_at" | "title" | "status";
    direction: "asc" | "desc";
  } | null;
}

export default function ProjectTable({
  projects,
  loading,
  onEdit,
  onDelete,
  onSort,
  sortConfig,
}: ProjectTableProps) {
  // Helper function to get primary contact name
  const getPrimaryContact = (project: Project) => {
    console.log("Project data for debugging:", project); // Debug log

    if (!project.project_contacts || project.project_contacts.length === 0) {
      console.log("No project contacts found"); // Debug log
      return "No contacts";
    }

    console.log("All project contacts:", project.project_contacts); // Debug log

    // First, try to find a contact with relationship_type = 'primary'
    const primaryTypeContact = project.project_contacts.find(
      (pc) => pc.relationship_type === "primary"
    );
    console.log("Primary type contact found:", primaryTypeContact); // Debug log

    if (primaryTypeContact && primaryTypeContact.contacts) {
      console.log(
        "Returning primary type contact:",
        primaryTypeContact.contacts.name
      ); // Debug log
      return primaryTypeContact.contacts.name;
    }

    // If no primary type contact, find contact with priority_order = 1
    const priorityOneContact = project.project_contacts.find(
      (pc) => pc.priority_order === 1
    );
    console.log("Priority 1 contact found:", priorityOneContact); // Debug log

    if (priorityOneContact && priorityOneContact.contacts) {
      console.log(
        "Returning priority 1 contact:",
        priorityOneContact.contacts.name
      ); // Debug log
      return priorityOneContact.contacts.name;
    }

    // If no primary type or priority 1, return the first contact in the list
    const firstContact = project.project_contacts[0];
    console.log("First contact found:", firstContact); // Debug log

    if (firstContact && firstContact.contacts) {
      console.log("Returning first contact:", firstContact.contacts.name); // Debug log
      return firstContact.contacts.name;
    }

    console.log("No contacts found to return"); // Debug log
    return "No contacts";
  };

  return (
    <Card className="relative overflow-hidden">
      <div className="card-gradient-border" />
      <CardHeader>
        <CardTitle className="gradient-text">Project List</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <IconLoader2 className="animate-spin h-6 w-6" />
            <span className="ml-2">Loading projects...</span>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-10">
            <IconBriefcase className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 font-medium">No projects</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Get started by adding a new project.
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => onSort && onSort("title")}
                >
                  Title
                  {sortConfig?.key === "title" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </TableHead>
                <TableHead>Description</TableHead>
                <TableHead
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => onSort && onSort("status")}
                >
                  Status
                  {sortConfig?.key === "status" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </TableHead>
                <TableHead>Primary Contact</TableHead>
                <TableHead
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => onSort && onSort("created_at")}
                >
                  Date Added
                  {sortConfig?.key === "created_at" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {project.description || "-"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        project.status === "pending"
                          ? "secondary"
                          : project.status === "in_progress"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {project.status.replace("_", " ").toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>{getPrimaryContact(project)}</TableCell>
                  <TableCell>
                    {new Date(project.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(project)}
                      className="mr-2"
                    >
                      <IconPencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onDelete(project.id, project.title)}
                      className="text-destructive hover:text-destructive"
                    >
                      <IconTrash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
