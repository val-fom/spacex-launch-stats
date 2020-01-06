/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, wait } from '@testing-library/react';
import { Launch, GET_LAUNCH } from 'components/Launch';

const mocks = [
  {
    request: {
      query: GET_LAUNCH,
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
