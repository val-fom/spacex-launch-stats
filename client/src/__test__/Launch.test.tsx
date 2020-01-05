/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
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

test('renders without crashes', () => {
  const { asFragment } = renderWithRouter(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Launch />
    </MockedProvider>,
    { route: '/1' }
  );
  expect(asFragment()).toMatchSnapshot();
});
