import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LaunchItem.module.css';

export const LaunchItem: React.FC<{ launch: Launch }> = ({ launch }) => (
  <div className={styles.container}>
    <Link to={`/launch/${launch.flight_number}`}>
      <div>flight_number: {launch.flight_number}</div>
    </Link>
    <div>launch_date_local: {launch.launch_date_local}</div>
    <div>mission_name: {launch.mission_name}</div>
    <div>rocket_name: {launch.rocket.rocket_name}</div>
  </div>
);
