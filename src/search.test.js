import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App, { Search } from './Search';

describe('Search', () => {
  it('renders Search component', () => {
    render(<App />);

    expect(screen.getByText('Search:')).toBeInTheDocument();

//    expect(screen.getByText(/Search/)).toBeInTheDocument();

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});

describe('Search', () => {
    it('calls the onChange callback handler', () => {
      // Jest
      // const onChange = jest.fn();
      // Vitest
      const onChange = jest.fn();
  
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
  
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
  
      expect(onChange).toHaveBeenCalledTimes(1);
    });
});

describe('Search', () => {
    it('calls the onChange callback handler', async () => {
      // Jest
      // const onChange = jest.fn();
      // Vitest
      const onChange = jest.fn();
  
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
  
      await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
  
      expect(onChange).toHaveBeenCalledTimes(10);
    });
  });