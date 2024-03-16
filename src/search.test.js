import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
  it('renders Search component', () => {
    render(<Search />);

    screen.getByText('Search:');
  });
});