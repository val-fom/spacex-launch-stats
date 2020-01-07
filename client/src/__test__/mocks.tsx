/* eslint-disable @typescript-eslint/camelcase */
import { GET_LAUNCHES } from 'components/Launches';
import { GET_LAUNCH } from 'components/Launch';

export const mocks = [
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
