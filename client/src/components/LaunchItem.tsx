import React from 'react';

export const LaunchItem: React.FC<{ launch: Launch }> = ({ launch }) => (
  <div className="App-launch">
    <div>flight_number</div>
    <div>{launch.flight_number}</div>
    <div>launch_date_local</div>
    <div>{launch.launch_date_local}</div>
    <div>mission_name</div>
    <div>{launch.mission_name}</div>
    <div>rocket_name</div>
    <div>{launch.rocket.rocket_name}</div>
  </div>
);
