import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
  it('renders Search component', () => {
    render(<Search />);

    expect(screen.getByText('Search:')).toBeInTheDocument();

//    expect(screen.getByText(/Search/)).toBeInTheDocument();

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});