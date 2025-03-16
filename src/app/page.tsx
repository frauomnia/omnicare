"use client"
import VolunteerInfoDisplay from "../components/VolunteerInfoDisplay";
import { useState, useEffect } from "react";
import FilterSystem from "@/components/FilterSystem";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [medicalSpecialities, setMedicalSpecialities] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [places, setPlaces] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState ({
    medicalSpeciality: '',
    country: '',
    place: ''
  });

  // fetch filter options
  useEffect(() => {
    async function fetchFilterOptions() {
      try {
        const response = await fetch('/api/filterOptions');
        const data = await response.json();
        setMedicalSpecialities(data.medicalSpecialities);
        setCountries(data.countries);
        setPlaces(data.places);
      } catch (error) {
        console.error(error)
      }
    }
    fetchFilterOptions();
  }, []);

  // fetch filtered volunteers' list 
  useEffect(() => {
    async function fetchVolunteers() {
      try {
        const response = await fetch(`/api/volunteers?medicalSpeciality=${selectedFilters.medicalSpeciality}&country=${selectedFilters.country}&place=${selectedFilters.place}`);
        const data = await response.json();
        setVolunteers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVolunteers();
    // re-fetch volunteers' list on filter change
  }, [selectedFilters]);

  const handleFilterChange = (filter: string, value: string) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filter]: value,
    }));
  }
  return (
   <div>
    <Navbar />
    <FilterSystem 
    medicalSpecialities={medicalSpecialities}
    countries={countries}
    places={places}
    selectedFilters={selectedFilters}
    onFilterChange={handleFilterChange}
    />

    {/* show list of volunteers */}
      <div className="my-4 grid grid-cols-1 gap-6">
        <div> 
          <h3 className="my-4 font-bold">List of volunteer doctors</h3>
        </div>
        {volunteers.length === 0 ? (
            // error handling in case of no volunteers
          <div className="text-red-500"> No volunteers found</div>
        ) : (
        volunteers.map((volunteer) => (
          <VolunteerInfoDisplay volunteer={volunteer} key={volunteer.id} />
      )  ))}
      </div>
   </div>
  );
}
