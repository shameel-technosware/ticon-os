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
  IconUserCircle,
  IconLoader2,
} from "@tabler/icons-react";

interface Contact {
  id: number;
  name: string;
  contact_number: string;
  email: string;
  notes: string;
  created_at: string;
  updated_at: string;
}

interface ContactTableProps {
  contacts: Contact[];
  loading: boolean;
  onEdit: (contact: Contact) => void;
  onDelete: (id: number, name: string) => void;
  onSort?: (key: "created_at" | "name" | "contact_number") => void;
  sortConfig?: {
    key: "created_at" | "name" | "contact_number";
    direction: "asc" | "desc";
  } | null;
}

export default function ContactTable({
  contacts,
  loading,
  onEdit,
  onDelete,
  onSort,
  sortConfig,
}: ContactTableProps) {
  return (
    <Card className="relative overflow-hidden">
      <div className="card-gradient-border" />
      <CardHeader>
        <CardTitle className="gradient-text">Contact List</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <IconLoader2 className="animate-spin h-6 w-6" />
            <span className="ml-2">Loading contacts...</span>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-10">
            <IconUserCircle className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 font-medium">No contacts</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Get started by adding a new contact.
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => onSort && onSort("name")}
                >
                  Name
                  {sortConfig?.key === "name" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => onSort && onSort("contact_number")}
                >
                  Phone Number
                  {sortConfig?.key === "contact_number" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Notes</TableHead>
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
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{contact.contact_number}</Badge>
                  </TableCell>
                  <TableCell>{contact.email || "-"}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {contact.notes || "-"}
                  </TableCell>
                  <TableCell>
                    {new Date(contact.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(contact)}
                      className="mr-2"
                    >
                      <IconPencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onDelete(contact.id, contact.name)}
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
