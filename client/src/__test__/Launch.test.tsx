/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { wait } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { Launch, LAUNCH } from '../components/Launch';
import { renderWithRouter } from './testUtils';

const mocks = [
  {
    request: {
      query: LAUNCH,
      variables: {
        flight_number: 1,
      },
    },
    result: {
      data: {
        launch: {
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
      },
    },
  },
];

test('should render loading state initially', () => {
  const { getByTestId } = renderWithRouter(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Launch />
    </MockedProvider>,
    { route: '/launch/1' }
  );
  const loadingElement = getByTestId('loading');
  expect(loadingElement).toBeInTheDocument();
});

test('should render launch details', async () => {
  const { getByTestId } = renderWithRouter(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Route exact path="/launch/:flight_number" component={Launch} />
    </MockedProvider>,
    { route: '/launch/1' }
  );

  await wait();

  const dataElement = getByTestId('data');
  expect(dataElement).toBeInTheDocument();
});
