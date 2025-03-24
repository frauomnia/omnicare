import * as React from "react"
import LogOutButton  from '../LogOutButton';
import { render, screen } from '@testing-library/react';
// import { vi } from 'vitest';

describe('LogOutButton', () => {
  it('should render the logoutbutton text properly', () => {
    render(<LogOutButton />);

    expect(screen.getByRole('button')).toHaveTextContent('Log out')
  });
});

