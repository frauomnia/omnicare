import * as React from "react"
import VolunteerInfoDisplay from '../VolunteerInfoDisplay';
import { render, screen } from '@testing-library/react';
// import { vi } from 'vitest';

describe('VolunteerInfoDisplay component', () => {
  it('should pass the id value in the link href properly', () => {
    render(
    <VolunteerInfoDisplay 
      volunteer= {    
      { id: '1',
      place_employment: 'Berlin',
      country_residence: 'Germany',
      first_language: 'Arabic',
      first_name: 'Omnia',
      home_country: 'Egypt',
      last_name: 'M',
      medical_speciality: 'Internal',
      clinic_address: 'street 1',
      opening_time: '9 AM - 17 PM',
      published: true 
    }} />);

    const valunteerList = screen.getByTitle('valunteerList');
    expect(valunteerList).toHaveAttribute('href', '/volunteers/1');
  });

  it('should pass the values for volunteers info properly', () => {
    render(
      <VolunteerInfoDisplay 
        volunteer= {    
        { id: '1',
        place_employment: 'Berlin',
        country_residence: 'Germany',
        first_language: 'Arabic',
        first_name: 'John',
        home_country: 'Egypt',
        last_name: 'M',
        medical_speciality: 'Internal',
        clinic_address: 'street 1',
        opening_time: '9 AM - 17 PM',
        published: true 
      }} />);
  
      expect(screen.getByTitle('volunteerName')).toHaveTextContent('John M')
      expect(screen.getByTitle('medical_speciality')).toHaveTextContent('Internal')

  });

});

