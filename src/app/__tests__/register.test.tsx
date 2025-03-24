import * as React from "react"
import AddVolunteerPage  from '../register/page';
import { render, screen } from '@testing-library/react';
// import { vi } from 'vitest';

describe('AddVolunteerPage', () => {
  it('should render the form header text properly', () => {
    render(<AddVolunteerPage />);

    expect(
      screen.getByText(/Register as a volunteer/i))
      .toBeInTheDocument();

  });

  it('should render the Submit button and text properly', () => {
    render(<AddVolunteerPage />);

    expect(
      screen.getByRole('button'))
      .toHaveTextContent('Submit')
      
  });

  it('should render the form inputs with attributes properly', () => {
    render(<AddVolunteerPage />);

    const firstNameInput = screen.getByPlaceholderText('first name')
    expect(firstNameInput)
    .toHaveAttribute('name', 'first_name'); 
    
    const lastNameInput = screen.getByPlaceholderText('last name')
    expect(lastNameInput)
    .toHaveAttribute('name', 'last_name');  
    
    const languageInput = screen.getByPlaceholderText('first language')
    expect(languageInput)
    .toHaveAttribute('name', 'first_language');  
  });
});


