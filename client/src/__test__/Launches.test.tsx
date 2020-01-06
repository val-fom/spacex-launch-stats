/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, wait } from '@testing-library/react';
import { Launches, GET_LAUNCHES } from 'components/Launches';
import { renderWithRouter } from './testUtils';

const mocks = [
  {
    request: {
      query: GET_LAUNCHES,
    },
    result: {
      data: {
        launches: [
          {
            flight_number: 1,
            mission_name: 'FalconSat',
            launch_year: '2006',
            launch_date_local: '2006-03-25T10:30:00+12:00',
            launch_success: false,
            rocket: {
              rocket_id: 'falcon1',
              rocket_name: 'Falcon 1',
              rocket_type: 'Merlin A',
            },
          },
          {
            flight_number: 2,
            mission_name: 'DemoSat',
            launch_year: '2007',
            launch_date_local: '2007-03-21T13:10:00+12:00',
            launch_success: false,
            rocket: {
              rocket_id: 'falcon1',
              rocket_name: 'Falcon 1',
              rocket_type: 'Merlin A',
            },
          },
        ],
      },
    },
  },
];

it('Launches should render loading state initially', () => {
  const { getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Launches />
    </MockedProvider>
  );
  const loadingElement = getByTestId('launches-loading');
  expect(loadingElement).toBeInTheDocument();
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
