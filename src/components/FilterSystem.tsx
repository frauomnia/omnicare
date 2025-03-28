"use client"

import * as React from "react"

interface FilterProps {
    medicalSpecialities: string[];
    countries: string[];
    places: string[];
    languages: string[];
    selectedFilters: {
        medicalSpeciality: string;
        country: string;
        place: string;
        language: string;
    };
    onFilterChange: (filter: string, value: string) => void;
}

export default function FilterSystem(
    {medicalSpecialities,
        countries, 
        places, 
        selectedFilters,
        languages,
        onFilterChange } : FilterProps) 
        {
        return (
            <div className="grid grid-cols-5 justify-items-center gap-1 rounded-sm mt-5">
                <div>
                    <select
                    className="bg-[#48752C] text-[#F1E6D0] placeholder:text-[#F1E6D0] text-sm font-bold border border-[#F1E6D0] rounded pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-[#F1E6D0] hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    name="medicalSpeciality"
                    value={selectedFilters.medicalSpeciality}
                    onChange={(e) => onFilterChange("medicalSpeciality", e.target.value)}
                    >
                        <option value="medicalSpeciality">Medical speciality &#8897;</option>
                        {medicalSpecialities.map((medicalSpeciality) => (
                            <option key={medicalSpeciality} value={medicalSpeciality}>{medicalSpeciality}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select
                    className="bg-[#48752C] text-[#F1E6D0] placeholder:text-[#F1E6D0] text-sm font-bold border border-[#F1E6D0] rounded pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-[#F1E6D0] hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    name="country"
                    value={selectedFilters.country}
                    onChange={(e) => onFilterChange("country", e.target.value)}
                    >
                        <option value="homeCountry">Home country &#8897;</option>
                        {countries.map((country) => (
                            <option key={country} value={country} >{country}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select
                        className="bg-[#48752C] text-[#F1E6D0] placeholder:text-[#F1E6D0] text-sm font-bold border border-[#F1E6D0] rounded pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-[#F1E6D0] hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                        name="place"
                        value={selectedFilters.place}
                        onChange={(e) => onFilterChange("place", e.target.value)}
                        >
                            <option value="city">City &#8897;</option>
                            {places.map((place) => (
                                <option key={place} value={place} >{place}</option>
                            ))}
                    </select>
                </div>
                <div>
                    <select
                        className="bg-[#48752C] text-[#F1E6D0] placeholder:text-[#F1E6D0] text-sm font-bold border border-[#F1E6D0] rounded pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-[#F1E6D0] hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                        name="language"
                        value={selectedFilters.language}
                        onChange={(e) => onFilterChange("language", e.target.value)}
                        >
                            <option value="language">Language &#8897;</option>
                            {languages.map((language) => (
                                <option key={language} value={language} >{language}</option>
                            ))}
                    </select>
                </div>
                <div className="text-[#48752C]">
                    <div onClick={() => {
                        window.location.href = "/volunteersList/";
                        }} 
                        className="font-bold text-base underline cursor-pointer"
                        >Reset all filters</div>
                </div>
            </div>
        )

}