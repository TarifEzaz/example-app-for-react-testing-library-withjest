import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './Async';

describe('Async', () => {
  it('renders Async component', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });
});

describe('App', () => {
    it('renders App component', async () => {
      render(<App />);
  
      // wait for the user to resolve
      await screen.findByText(/Signed in as/);
  
      expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
  
      expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
    });
});