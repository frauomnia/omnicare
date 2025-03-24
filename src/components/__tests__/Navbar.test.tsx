import * as React from "react"
import Navbar from '../Navbar';
import { render, screen } from '@testing-library/react';
// import { vi } from 'vitest';

describe('Navbar component', () => {
  it('should render the web app title and tagline', () => {
    render(<Navbar />);

    expect(
        screen.getByText(/OmniCare/i)
        ).toBeInTheDocument();

    expect(
        screen.getByText(/Healthcare for all/i)
        ).toBeInTheDocument();
  });

  it('should render the logo properly', () => {
    render(<Navbar />);

    const image = screen.getByAltText('logo');
    expect(image).toHaveAttribute('alt', 'logo');
  });

  it('should render the Home page link properly', () => {
    render(<Navbar />);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveAttribute('href', '/');
  });
});

