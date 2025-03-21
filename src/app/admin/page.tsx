// "use client"
// import { useState, useEffect } from "react";
// import FilterSystem from "@/components/FilterSystem";
// import Navbar from "@/components/Navbar";
// import DeleteButton from "@/components/DeleteButton";
// import PublishButton from "@/components/PublishButton";

// export default function Home() {
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [selectedFilters, setSelectedFilters] = useState ({
//     medicalSpeciality: '',
//     country: '',
//     place: '',
//     language: ''
//   });

//   // fetch filter options
// //   useEffect(() => {
// //     async function fetchFilterOptions() {
// //       try {
// //         const response = await fetch('/api/filterOptions');
// //         const data = await response.json();
// //         setMedicalSpecialities(data.medicalSpecialities);
// //         setCountries(data.countries);
// //         setPlaces(data.places);
// //       } catch (error) {
// //         console.error(error)
// //       }
// //     }
// //     fetchFilterOptions();
// //   }, []);

//   // fetch filtered volunteers' list 
//   useEffect(() => {
//     async function fetchVolunteers() {
//       try {
//         const response = await fetch(`/api/volunteers?medicalSpeciality=${selectedFilters.medicalSpeciality}&country=${selectedFilters.country}&place=${selectedFilters.place}&language=${selectedFilters.language}`);
//         const data = await response.json();
//         setVolunteers(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchVolunteers();
//     // re-fetch volunteers' list on filter change
//   }, [selectedFilters]);

//   return (
//    <div>
//     <Navbar />

//     {/* show list of volunteers */}
//       {/* <div className="my-4 grid grid-cols-1 gap-6">
//         <div> 
//           <h3 className="my-4 font-bold">List of volunteer doctors</h3>
//         </div>
//         {volunteers.length === 0 ? (
//             // error handling in case of no volunteers
//           <div className="text-red-500"> No volunteers found</div>
//         ) : (
//         volunteers.map((volunteer) => (
//           <VolunteerInfoDisplay volunteer={volunteer} key={volunteer.id} />
//       )  ))}
//       </div> */}
//       {/* source: https://www.material-tailwind.com/docs/html/table */}
//       <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
//         <table className="w-full text-left table-auto min-w-max">
//             <thead>
//                 <tr>
//                     <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
//                         <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Name</p>
//                     </th>
//                     <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
//                         <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Publish</p>
//                     </th>
//                     <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
//                         <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Delete</p>
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//             {

//                 volunteers.length > 0 && volunteers.map((volunteer) => (
//                 <tr key={volunteer.id}>
//                     <td className="p-4 border-b border-blue-gray-50">
//                         <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{volunteer.first_name + " " + volunteer.last_name}</p>
//                     </td>
//                     <td className="p-4 border-b border-blue-gray-50">
//                         <DeleteButton volunteer={volunteer} />
//                     </td>
//                     <td className="p-4 border-b border-blue-gray-50">
//                         <PublishButton volunteer={volunteer} />
//                     </td>
//                 </tr>
//                 ))}
//             </tbody>
//         </table>
//       </div>
//    </div>
//   );
// }
