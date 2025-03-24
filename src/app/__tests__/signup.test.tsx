import * as React from "react"
import SignUp  from '../sign-up/page';
import { render, screen } from '@testing-library/react';
// import { vi } from 'vitest';

describe('SignUp', () => {
  it('should render the Sign up text properly', () => {
    render(<SignUp />);

    expect(
      screen.getByText(/Sign up/i))
      .toBeInTheDocument();

  });

  it('should render the Submit button and text properly', () => {
    render(<SignUp />);

    expect(
      screen.getByRole('button'))
      .toHaveTextContent('Submit')
      
  });

  it('should render the form inputs with attributes properly', () => {
    render(<SignUp />);

    const nameInput = screen.getByPlaceholderText('name')
    expect(nameInput)
    .toHaveAttribute('name', 'name'); 
    
    const emailInput = screen.getByPlaceholderText('email')
    expect(emailInput).toHaveAttribute('name', 'email');  
    
    const passwordInput = screen.getByPlaceholderText('password')
    expect(passwordInput).toHaveAttribute('name', 'password');  
  });
});


