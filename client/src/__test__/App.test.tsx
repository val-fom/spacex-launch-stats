import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/spacex/i);
  expect(headerElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
