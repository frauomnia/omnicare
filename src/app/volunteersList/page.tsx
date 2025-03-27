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

  // fetch filter options from API and set the options state
  useEffect(() => {
    fetch('/api/filterOptions')
    // parse the response as json 
    .then((res) => res.json()) 
    .then((volunteers) => {
      setMedicalSpecialities(volunteers.medicalSpecialities);
      setCountries(volunteers.countries);
      setPlaces(volunteers.places);
      setLanguages(volunteers.languages);
      setLoading(false);
    })
  }, []);

  // fetch volunteers' list per selected filters (if any) and set the volunteers state
  useEffect(() => {
    async function fetchVolunteers() {
      try {
        const response = await fetch(`/api/volunteers?medicalSpeciality=${selectedFilters.medicalSpeciality}&country=${selectedFilters.country}&place=${selectedFilters.place}&language=${selectedFilters.language}`);
        // parse the response as json 
        const data = await response.json();
        setVolunteers(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchVolunteers();
    // re-fetch volunteers' list on filter options change
  }, [selectedFilters]);

  // on filter change, keep previous state and add/update new filter options to selectedFilters state
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
        <h3 className="my-4 text-xl font-bold text-[#48752C]">List of doctors</h3>
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
