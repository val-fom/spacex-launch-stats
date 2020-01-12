/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { wait, fireEvent } from '@testing-library/react';
import { CoreLayout } from 'layouts/CoreLayout';
import { mocks } from './mocks';
import { renderWithRouter } from './testUtils';

it('CoreLayout rendering with gql data and navigating', async () => {
  const { getByTestId, getByText } = renderWithRouter(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CoreLayout />
    </MockedProvider>
  );

  // check launches loading state
  const launchesloader = getByTestId('loader');
  expect(launchesloader).toBeInTheDocument();

  // waing for launches data ready
  await wait();

  // check that launches are loaded
  const launchesDataElement = getByTestId('launches-data');
  expect(launchesDataElement).toBeInTheDocument();

  // click on first LaunchItem
  const firstLaunchLink = getByText(/2006-03-25T10:30:00\+12:00/i);
  fireEvent.click(firstLaunchLink);

  // check that route changed to launch and it is in loading state
  const launchloader = getByTestId('loader');
  expect(launchloader).toBeInTheDocument();

  // waing for launch data ready
  await wait();

  // check that launch are loaded
  const launchDataElement = getByTestId('launch-data');
  expect(launchDataElement).toBeInTheDocument();

  const launchDateElement = getByText(/2006-03-25T10:30:00\+12:00/i);
  expect(launchDateElement).toBeInTheDocument();
});
