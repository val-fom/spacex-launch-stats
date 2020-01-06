import React from 'react';
import { Header } from 'components/Header';
import { renderWithRouter } from './testUtils';

it('Header renders without crashing', () => {
  const { getByTestId } = renderWithRouter(<Header />);
  const header = getByTestId('header');
  expect(header).toBeInTheDocument();
});
