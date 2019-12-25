/* eslint-disable camelcase */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { LaunchItem } from './LaunchItem';

const LAUNCHES = gql`
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
  const { loading, error, data } = useQuery<Launches>(LAUNCHES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <>
      {data?.launches.map(launch => (
        <LaunchItem
          key={`${launch.flight_number}${launch.mission_name}`}
          launch={launch}
        />
      ))}
    </>
  );
};
