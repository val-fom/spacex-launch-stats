/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LaunchItem } from '../components/LaunchItem';

const mockLaunch = {
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
};

test('matches snapshot', () => {
  const { asFragment } = render(
    <Router>
      <LaunchItem launch={mockLaunch} />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
