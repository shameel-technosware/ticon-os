"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import ProjectTable from "./_components/project-table";
import ProjectFormDialog from "./_components/project-form-dialog";
import ConfirmationDialog from "@/components/ui/confirmation-dialog";

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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: "created_at" | "title" | "status";
    direction: "asc" | "desc";
  } | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean;
    projectId: number | null;
    projectName: string;
  }>({
    isOpen: false,
    projectId: null,
    projectName: "",
  });

  const supabase = createClient();

  // Fetch projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select(
          `
          id,
          title,
          description,
          status,
          created_by,
          created_at,
          updated_at,
          project_contacts (
            id,
            contact_id,
            relationship_type,
            priority_order,
            contacts (
              id,
              name,
              contact_number,
              email
            )
          )
        `
        )
        .eq("created_by", (await supabase.auth.getUser()).data.user?.id || "")
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Cast data to Project[] type to satisfy TypeScript
      const typedData = data as unknown as Project[];
      setProjects(typedData || []);
      setFilteredProjects(typedData || []); // Initialize filtered projects
    } catch (error: any) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  // Function to sort projects
  const sortProjects = (projectsToSort: Project[]) => {
    if (!sortConfig) return projectsToSort;

    const sortedProjects = [...projectsToSort];
    sortedProjects.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sortedProjects;
  };

  // Filter and sort projects based on search term and sort config
  useEffect(() => {
    let result = [...projects];

    // Apply search filter
    if (searchTerm.trim() !== "") {
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (project.description &&
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase())) ||
          project.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    if (sortConfig) {
      result = sortProjects(result);
    }

    setFilteredProjects(result);
  }, [searchTerm, sortConfig, projects]);

  // Handle sorting
  const handleSort = (key: "created_at" | "title" | "status") => {
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
    fetchProjects();
  }, []);

  // Edit project
  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  // Show delete confirmation dialog
  const showDeleteConfirmation = (id: number, title: string) => {
    setDeleteConfirmation({
      isOpen: true,
      projectId: id,
      projectName: title,
    });
  };

  // Delete project
  const handleDeleteConfirmed = async () => {
    if (deleteConfirmation.projectId === null) return;

    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", deleteConfirmation.projectId);

      if (error) throw error;

      toast.success("Project deleted successfully");
      fetchProjects();
    } catch (error: any) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    } finally {
      // Close the confirmation dialog
      setDeleteConfirmation({
        isOpen: false,
        projectId: null,
        projectName: "",
      });
    }
  };

  // Cancel delete operation
  const handleDeleteCancel = () => {
    setDeleteConfirmation({
      isOpen: false,
      projectId: null,
      projectName: "",
    });
  };

  // Handle save (create or update)
  const handleSave = () => {
    setIsModalOpen(false);
    setEditingProject(null);
    fetchProjects();
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight gradient-text">
              Projects
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your projects and associated contacts
            </p>
          </div>
          <Button
            onClick={() => {
              setEditingProject(null);
              setIsModalOpen(true);
            }}
            variant="gradient"
          >
            <IconPlus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-sm">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <IconSearch className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Search projects..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <ProjectTable
        projects={filteredProjects}
        loading={loading}
        onEdit={handleEdit}
        onDelete={showDeleteConfirmation}
        onSort={handleSort}
        sortConfig={sortConfig}
      />

      <ProjectFormDialog
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        project={editingProject}
        onSave={handleSave}
      />

      <ConfirmationDialog
        isOpen={deleteConfirmation.isOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirmed}
        title="Delete Project"
        description={`Are you sure you want to delete ${deleteConfirmation.projectName}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
}
