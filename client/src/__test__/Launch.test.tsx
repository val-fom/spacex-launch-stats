/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, wait } from '@testing-library/react';
import { Launch } from 'components/Launch';
import { mocks } from './mocks';

it('Launch should render loading state initially', () => {
  const { getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Launch flightNumber="1" />
    </MockedProvider>
  );
  const loadingElement = getByTestId('launch-loading');
  expect(loadingElement).toBeInTheDocument();
});

it('Launch should render launch details', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Launch flightNumber="1" />
    </MockedProvider>
  );

  await wait();

  const dataElement = getByTestId('launch-data');
  expect(dataElement).toBeInTheDocument();
});
