/* eslint-disable camelcase */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { LaunchItem } from './LaunchItem';

export const GET_LAUNCHES = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export const Launches: React.FC<{}> = () => {
  const { loading, error, data } = useQuery<{ launches: Launch[] }>(
    GET_LAUNCHES
  );

  if (loading) return <p data-testid="launches-loading">Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div data-testid="launches-data">
      {data?.launches.map(launch => (
        <LaunchItem
          key={`${launch.flight_number}${launch.mission_name}`}
          launch={launch}
        />
      ))}
    </div>
  );
};
