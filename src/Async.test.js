import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './Async';

jest.mock('axios');

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

describe('App', () => {
	it('renders App component', () => {
		render(<App />);

		expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'JavaScript' },
		});

		waitFor(() =>
			expect(
				screen.getByText(/Searches for JavaScript/)
			).toBeInTheDocument()
		);
	});
});

describe('App', () => {
	it('renders App component', async () => {
		render(<App />);

		// wait for the user to resolve
		await screen.findByText(/Signed in as/);

		expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

		await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

		expect(
			screen.getByText(/Searches for JavaScript/)
		).toBeInTheDocument();
	});
});
