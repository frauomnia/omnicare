
interface FilterProps {
    medicalSpecialities: string[];
    countries: string[];
    places: string[];
    selectedFilters: {
        medicalSpeciality: string;
        country: string;
        place: string;
    };
    onFilterChange: (filter: string, value: string) => void;
}

export default function FilterSystem(
    {medicalSpecialities,
        countries, 
        places, 
        selectedFilters,
        onFilterChange } : FilterProps) 
        {
        return (
            <div>
                <div>
                    <select
                    name="medicalSpeciality"
                    value={selectedFilters.medicalSpeciality}
                    onChange={(e) => onFilterChange("medicalSpeciality", e.target.value)}
                    >
                        <option value="">Select a medical speciality</option>
                        {medicalSpecialities.map((medicalSpeciality) => (
                            <option
                            key={medicalSpeciality}
                            value={medicalSpeciality}
                            >{medicalSpeciality}</option>
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
                    name="country"
                    value={selectedFilters.country}
                    onChange={(e) => onFilterChange("country", e.target.value)}
                    >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option
                            key={country}
                            value={country}
                            >{country}</option>
                        ))}
                    </select>
                </div>
            </div>
        )

}