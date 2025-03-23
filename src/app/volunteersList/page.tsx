"use client"

import { useState, useEffect } from "react";
import VolunteerInfoDisplay from "../../components/VolunteerInfoDisplay";
import FilterSystem from "@/components/FilterSystem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VolunteersList() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [medicalSpecialities, setMedicalSpecialities] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [places, setPlaces] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState ({
    medicalSpeciality: '',
    country: '',
    place: '',
    language: '',
  });

  useEffect(() => {
    fetch('/api/filterOptions')
    .then((res) => res.json()) 
    .then((volunteers) => {
      setMedicalSpecialities(volunteers.medicalSpecialities);
      setCountries(volunteers.countries);
      setPlaces(volunteers.places);
      setLanguages(volunteers.languages);
      setLoading(false);
    })
  }, [])

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
  return (
   <div>
      <Navbar />
      {/* user signin/signup buttons */}
      <div>
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
      <Footer />
   </div>
  );
}
