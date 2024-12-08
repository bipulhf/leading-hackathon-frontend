"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

// Mock data for demonstration
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    profession: "Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    profession: "Designer",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    profession: "Manager",
  },
  // Add more mock users as needed
];

export function UserList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Input
        type='text'
        placeholder='Search users...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='mb-4'
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Profession</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.profession}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
