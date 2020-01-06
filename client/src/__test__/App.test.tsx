import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

it('App matches snapshot in `Loading` state', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
