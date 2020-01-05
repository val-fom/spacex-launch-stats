/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Launch } from '../components/Launch';
import { renderWithRouter } from './testUtils';

test('matches snapshot', () => {
  const { debug } = renderWithRouter(<Launch />, { route: '/1' });
  debug();
});
