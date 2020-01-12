/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, wait } from '@testing-library/react';
import { Launches } from 'components/Launches';
import { renderWithRouter } from './testUtils';
import { mocks } from './mocks';

it('Launches should render loading state initially', () => {
  const { getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Launches />
    </MockedProvider>
  );
  const loader = getByTestId('loader');
  expect(loader).toBeInTheDocument();
});

it('Launches should render launches list', async () => {
  const { getByTestId } = renderWithRouter(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Launches />
    </MockedProvider>
  );

  await wait();

  const dataElement = getByTestId('launches-data');
  expect(dataElement).toBeInTheDocument();
});
