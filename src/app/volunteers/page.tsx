"use client"
import VolunteerInfoDisplay from "../../components/VolunteerInfoDisplay";
import { useState, useEffect } from "react";
import FilterSystem from "@/components/FilterSystem";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [medicalSpecialities, setMedicalSpecialities] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [places, setPlaces] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState ({
    medicalSpeciality: '',
    country: '',
    place: '',
    language: '',
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
        setLanguages(data.languages);
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
        const response = await fetch(`/api/volunteers?medicalSpeciality=${selectedFilters.medicalSpeciality}&country=${selectedFilters.country}&place=${selectedFilters.place}&language=${selectedFilters.language}`);
        const data = await response.json();
        setVolunteers(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchVolunteers();
    // re-fetch volunteers' list on filter options change
  }, [selectedFilters]);

  const handleFilterChange = (filter: string, value: string) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filter]: value,
    }));
  }

  const fullUser = null;

  return (
   <div>
      <Navbar />
      {/* user signin/signup buttons */}
      <div>
      {
        fullUser == null ? (
          <div>
              <Link href='/sign-in'>
                sign in
              </Link>
              <Link href='/sign-up'>
                sign up
              </Link>
          </div>
        ) : (
          <div>
            None exist
            {/* {fullUser.role === "admin" && (
              <Link href="adminpage"></Link>
            )} */}
          </div>
        )}
      </div>

      <FilterSystem 
        medicalSpecialities={medicalSpecialities}
        countries={countries}
        places={places}
        languages={languages}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
      {/* show list of volunteers */}
      <div> 
        <h3 className="my-4 font-bold">List of doctors</h3>
      </div>
      <div className="my-4 grid grid-cols-3 gap-3">
        {volunteers.length === 0 ? (
          <div className=""> No volunteers found</div>
        ) : (
          volunteers.map((volunteer) => (
            <VolunteerInfoDisplay volunteer={volunteer} key={volunteer.id} />
          ))
        )}
      </div>
   </div>
  );
}
