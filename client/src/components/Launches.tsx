/* eslint-disable camelcase */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Card } from 'semantic-ui-react';
import { Loader } from 'components/Loader';
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

  if (loading) return <Loader />;

  if (error) return <p>Error</p>;

  return (
    <Card.Group
      data-testid="launches-data"
      itemsPerRow={window.innerWidth > 767 ? 2 : 1}
    >
      {data?.launches.map(launch => (
        <LaunchItem
          key={`${launch.flight_number}${launch.mission_name}`}
          launch={launch}
        />
      ))}
    </Card.Group>
  );
};
