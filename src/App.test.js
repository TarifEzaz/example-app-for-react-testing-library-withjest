import { render, screen } from '@testing-library/react';
import App from './App';

describe('true is truthy and false is falsy', () => {
  it('true is truthy', () => {
    expect(true).toBe(true);
  });

  it('false is falsy', () => {
    expect(false).toBe(false);
  });
});

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
  });
});
