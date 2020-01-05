import React from 'react';
import { Link } from 'react-router-dom';

export const LaunchItem: React.FC<{ launch: Launch }> = ({ launch }) => (
  <div className="App-launch">
    <Link to={`/launch/${launch.flight_number}`}>
      <div>flight_number</div>
      <div>{launch.flight_number}</div>
    </Link>
    <div>launch_date_local</div>
    <div>{launch.launch_date_local}</div>
    <div>mission_name</div>
    <div>{launch.mission_name}</div>
    <div>rocket_name</div>
    <div>{launch.rocket.rocket_name}</div>
  </div>
);
