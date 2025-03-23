"use client"

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import DeleteButton from "@/components/DeleteButton";
import PublishButton from "@/components/PublishButton";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function AdminVolunteersPage() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/volunteers')
    .then((res) => res.json())
    .then((volunteers) => {
      setVolunteers(volunteers);
      setLoading(false);
    })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!volunteers) return <p>No Volunteers found</p>

  return (
   <div>
    <Navbar />
      {/* reference: https://www.material-tailwind.com/docs/html/table */}
      <div className="relative flex flex-col w-full h-full overflow-scroll text-[#F1E6D0] bg-[#48752C] shadow-md rounded-xl bg-clip-border mt-5">
        <table className="w-full text-left table-auto min-w-max">
            <thead>
                <tr>
                    <th className="p-4 border-b border-[#F1E6D0] bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-[#F1E6D0] opacity-70">Name</p>
                    </th>
                    <th className="p-4 border-b border-[#F1E6D0] bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-[#F1E6D0] opacity-70">Publish</p>
                    </th>
                    <th className="p-4 border-b border-[#F1E6D0] bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-[#F1E6D0] opacity-70">Delete</p>
                    </th>
                </tr>
            </thead>
            <tbody>
            {
              volunteers.length > 0 && volunteers.map((volunteer) => (
              <tr key={volunteer.id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Link href={`/volunteers/` + volunteer.id} >
                      <p className="btn w-fit block p-2 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{volunteer.first_name + " " + volunteer.last_name}</p>
                    </Link>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                      <DeleteButton volunteer={volunteer} />
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                      <PublishButton volunteer={volunteer} />
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