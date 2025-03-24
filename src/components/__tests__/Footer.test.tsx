import * as React from "react"
import Footer from '../Footer';
import { render, screen } from '@testing-library/react';
// import { vi } from 'vitest';


describe('Footer component', () => {
  it('should render the web app title and tagline', () => {
    render(<Footer />);

    expect(
        screen.getByText(/OmniCare/i)
        ).toBeInTheDocument();

    expect(
        screen.getByText(/Healthcare for all/i)
        ).toBeInTheDocument();
  });

  it('should render the logo properly', () => {
    render(<Footer />);

    const image = screen.getByAltText('logo');
    expect(image).toHaveAttribute('alt', 'logo');
  });
});

