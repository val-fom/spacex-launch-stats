/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';

const LAUNCH = gql`
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

export const Launch: React.FC<{}> = () => {
  const { flight_number: flightNumber } = useParams();
  const { loading, error, data } = useQuery<{ launch: Launch }>(LAUNCH, {
    variables: {
      flight_number: flightNumber ? parseInt(flightNumber) : undefined,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

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
    <div>
      <div>flight_number: {flight_number}</div>
      <div>mission_name: {mission_name}</div>
      <div>launch_year: {launch_year}</div>
      <div>launch_date_local: {launch_date_local}</div>
      <div>launch_success: {launch_success}</div>
      <div>rocket_id: {rocket_id}</div>
      <div>rocket_name: {rocket_name}</div>
      <div>rocket_type: {rocket_type}</div>
    </div>
  );
};
