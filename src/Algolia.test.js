import * as React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './Algolia';

jest.mock('axios');

describe('Algolia', () => {
	it('fetches stories from an API and displays them', async () => {
		const stories = [
			{ objectID: '1', title: 'Hello' },
			{ objectID: '2', title: 'React' },
		];

		axios.get.mockImplementationOnce(() =>
			Promise.resolve({ data: { hits: stories } })
		);

		render(<App />);

		await userEvent.click(screen.getByRole('button'));

		const items = await screen.findAllByRole('listitem');

		expect(items).toHaveLength(2);
	});
});

describe('App', () => {
	it('fetches stories from an API and fails', async () => {

		axios.get.mockImplementationOnce(() =>
			Promise.reject(new Error())
		);

		render(<App />);

		await userEvent.click(screen.getByRole('button'));

		const message = await screen.findByText(/Something went wrong/);

		expect(message).toBeInTheDocument();
	});
});

describe('App', () => {
	it('fetches stories from an API and displays them', async () => {
		const stories = [
			{ objectID: '1', title: 'Hello' },
			{ objectID: '2', title: 'React' },
		];

		const promise = Promise.resolve({ data: { hits: stories } });

		axios.get.mockImplementationOnce(() => promise);

		render(<App />);

		await userEvent.click(screen.getByRole('button'));

		waitFor(() => promise);

		expect(screen.getAllByRole('listitem')).toHaveLength(2);
	});
});