import React from 'react';
import { Launch } from 'components/Launch';
import { useParams } from 'react-router-dom';

export const LaunchRoute: React.FC<{}> = () => {
  const { flight_number: flightNumber } = useParams();
  return <Launch flightNumber={flightNumber} />;
};
