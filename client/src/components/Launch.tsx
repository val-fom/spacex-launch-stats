/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Table, Icon } from 'semantic-ui-react';

export const GET_LAUNCH = gql`
  query Launch($flight_number: Int!) {
    launch(flight_number: $flight_number) {
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

export const Launch: React.FC<{ flightNumber?: string }> = ({
  flightNumber,
}) => {
  const { loading, error, data } = useQuery<{ launch: Launch }>(GET_LAUNCH, {
    variables: {
      flight_number: flightNumber ? parseInt(flightNumber) : undefined,
    },
  });

  if (loading) return <p data-testid="launch-loading">Loading...</p>;

  if (error) return <p data-testid="launch-error">Error</p>;

  if (!data?.launch) return <p>No data</p>;

  const {
    flight_number,
    mission_name,
    launch_year,
    launch_date_local,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type },
  } = data.launch;

  return (
    <Table celled unstackable>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Flight number</Table.Cell>
          <Table.Cell>{flight_number}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Mission name</Table.Cell>
          <Table.Cell>{mission_name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Launch year</Table.Cell>
          <Table.Cell>{launch_year}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Launch date local</Table.Cell>
          <Table.Cell>{launch_date_local}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rocket id</Table.Cell>
          <Table.Cell>{rocket_id}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rocket name</Table.Cell>
          <Table.Cell>{rocket_name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rocket type</Table.Cell>
          <Table.Cell>{rocket_type}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Launch success</Table.Cell>
          <Table.Cell>
            {launch_success ? (
              <Icon name="checkmark" color="green" />
            ) : (
              <Icon name="close" color="red" />
            )}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
