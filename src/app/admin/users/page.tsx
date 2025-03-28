"use client"

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import DeleteUserButton from "@/components/DeleteUserButton";
import MakeAdminButton from "@/components/MakeAdminButton";
import Footer from "@/components/Footer";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
    .then((res) => res.json())
    .then((users) => {
      setUsers(users);
      setLoading(false);
    })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!users) return <p>No Users found</p>

  return (
   <div>
    <Navbar />
      {/* reference: https://www.material-tailwind.com/docs/html/table */}
      <div className="relative flex flex-col w-full h-full overflow-scroll text-[#F1E6D0] bg-[#48752C] shadow-md rounded-xl bg-clip-border mt-5">
        <table className="w-full text-left table-auto min-w-max">
            <thead>
                <tr>
                    <th className="p-4 border-b border-[#F1E6D0] bg-blue-gray-50">
                        <p className="block font-sans text-base antialiased font-bold leading-none text-[#F1E6D0] opacity-70">User</p>
                    </th>
                    <th className="p-4 border-b border-[#F1E6D0] bg-blue-gray-50">
                        <p className="block font-sans text-base antialiased font-bold leading-none text-[#F1E6D0] opacity-70">Make Admin</p>
                    </th>
                    <th className="p-4 border-b border-[#F1E6D0] bg-blue-gray-50">
                        <p className="block font-sans text-base antialiased font-bold leading-none text-[#F1E6D0] opacity-70">Delete</p>
                    </th>
                </tr>
            </thead>
            <tbody>
            {
              users.map((user) => (
              <tr key={user.id}>
                  <td className="p-3">
                      <p className="w-fit p-2 text-base antialiased font-bold leading-normal text-[#F1E6D0] ">{user.name}</p>
                      <small> Email: {user.email} </small>
                      <br />
                      <small> Role: {user.role} </small>
                  </td>
                  <td className="p-3">
                      <MakeAdminButton user={user} />
                  </td>
                  <td className="p-3">
                      <DeleteUserButton user={user} />
                  </td> 
              </tr>
            ))}
            </tbody>
        </table>
      </div>
      <Footer />
   </div>
  );
}