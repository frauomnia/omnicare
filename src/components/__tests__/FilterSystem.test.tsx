
import * as React from "react"
import FilterSystem from '../FilterSystem';
import { render, screen } from '@testing-library/react';

describe('FilterSystem component', () => {
  it('should render all the options elements properly', () => {
    render(<FilterSystem 
      medicalSpecialities={['Internal']}
      countries={['Egypt']}
      languages={['Arabic']}
      places={['Berlin']}
      selectedFilters={{
        medicalSpeciality: "Internal",
        country: "Egypt",
        place: "Arabic",
        language: 'Berlin'
      }} onFilterChange={function (filter: string, value: string): void {
        throw new Error("Function not implemented.");
      } }  />);

      expect(screen.getAllByRole('option')).toBeDefined()
  });

  it('should render the texts for filter options properly', () => {
    render(<FilterSystem 
      medicalSpecialities={['Internal']}
      countries={['Egypt']}
      languages={['Arabic']}
      places={['Berlin']}
      selectedFilters={{
        medicalSpeciality: "Internal",
        country: "Egypt",
        place: "Arabic",
        language: 'Berlin'
      }} onFilterChange={function (filter: string, value: string): void {
        throw new Error("Function not implemented.");
      } }  />);

    // check that the select options/filters are rendered properly
    const medicalSpeciality = screen.getByText('Medical speciality');
    expect(medicalSpeciality).toHaveAttribute('value', 'medicalSpeciality');

    const homeCountry = screen.getByText('Home country');
    expect(homeCountry).toHaveAttribute('value', 'homeCountry');

    const city = screen.getByText('City');
    expect(city).toHaveAttribute('value', 'city');

    const language = screen.getByText('Language');
    expect(language).toHaveAttribute('value', 'language');
  });

});

