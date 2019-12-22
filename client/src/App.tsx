/* eslint-disable camelcase */
import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

interface Launches {
  launches: Launch[];
}

interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_local: string;
  launch_success: boolean;
  rocket: Rocket;
}

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

const App: React.FC = () => {
  const { loading, error, data } = useQuery<Launches>(LAUNCHES);
  return (
    <div className="App">
      <header className="App-header">SpaceX</header>
      <div className="App-content">
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {data?.launches.map(launch => (
          <div
            key={`${launch.flight_number}${launch.mission_name}`}
            className="App-launch"
          >
            <div>flight_number</div>
            <div>{launch.flight_number}</div>
            <div>launch_date_local</div>
            <div>{launch.launch_date_local}</div>
            <div>mission_name</div>
            <div>{launch.mission_name}</div>
            <div>rocket_name</div>
            <div>{launch.rocket.rocket_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
