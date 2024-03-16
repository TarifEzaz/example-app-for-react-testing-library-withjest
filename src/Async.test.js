import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './Async';

describe('Async', () => {
  it('renders Async component', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });
});