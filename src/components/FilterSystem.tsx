
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
            <div className="grid grid-cols-4 justify-items-center gap-1 rounded-sm mt-5">
                <div>
                    <select
                    className="bg-[#48752C] text-[#F1E6D0] placeholder:text-[#F1E6D0] text-sm font-bold border border-[#F1E6D0] rounded pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-[#F1E6D0] hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    name="medicalSpeciality"
                    value={selectedFilters.medicalSpeciality}
                    onChange={(e) => onFilterChange("medicalSpeciality", e.target.value)}
                    >
                        <option value="">Medical speciality</option>
                        {medicalSpecialities.map((medicalSpeciality) => (
                            <option key={medicalSpeciality} value={medicalSpeciality}>{medicalSpeciality}</option>
                        ))}
                    </select>
                </div>
                <div>
                    {/* {countries.map((country)=> (
                        <label key={country}>
                            <input 
                            type="radio"
                            name="country"
                            value={country}
                            checked={selectedFilters.country === country}
                            onChange={() => onFilterChange("country", country)}
                            />
                            {country}
                        </label>
                    ))} */}
                    <select
                    className="bg-[#48752C] text-[#F1E6D0] placeholder:text-[#F1E6D0] text-sm font-bold border border-[#F1E6D0] rounded pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-[#F1E6D0] hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    name="country"
                    value={selectedFilters.country}
                    onChange={(e) => onFilterChange("country", e.target.value)}
                    >
                        <option value="">Home country</option>
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
                            <option value="">City</option>
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
                            <option value="">Language</option>
                            {languages.map((language) => (
                                <option key={language} value={language} >{language}</option>
                            ))}
                    </select>
                </div>
            </div>
        )

}