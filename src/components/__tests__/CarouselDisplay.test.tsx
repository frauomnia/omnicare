import * as React from "react"
import CarouselDisplay from '../CarouselDisplay';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
// import { vi } from 'vitest';

describe('Carousel component', () => {
  it('should render the carousel texts properly', () => {
    render(<CarouselDisplay />);

    // check that some of the text is rendered properly on the carousel component
    waitFor(() => expect(
        screen.getAllByText(/Our mission/i)
        ).toBeInTheDocument());

    expect(
        screen.getByText(/Our goal is to help refugees find medical volunteers./i)
        ).toBeInTheDocument();

    expect(
        screen.getByText(/Our goal is to help break language barrier between patient and medical care provider./i)
        ).toBeInTheDocument();
  });

  it('should render the carousel images properly', () => {
    render(<CarouselDisplay />);

    // check that some of the images is rendered properly on the carousel component
    const firstImage = screen.getByAltText('cute avocado with a smile');
    expect(firstImage).toHaveAttribute('alt', 'cute avocado with a smile');

    const secondImage = screen.getByAltText('a hand with yellow background');
    expect(secondImage).toHaveAttribute('alt', 'a hand with yellow background');

    const thirdImage = screen.getByAltText('a hand with two fingers and yellow background');
    expect(thirdImage).toHaveAttribute('alt', 'a hand with two fingers and yellow background');
  });

});

