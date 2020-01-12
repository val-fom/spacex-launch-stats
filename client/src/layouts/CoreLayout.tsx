import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LaunchRoute } from 'routes/LaunchRoute';
import { LaunchesRoute } from 'routes/LaunchesRoute';
import { Header } from 'components/Header';
import styles from './CoreLayout.module.css';

export const CoreLayout: React.FC<{}> = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={LaunchesRoute} />
        <Route exact path="/launch/:flight_number" component={LaunchRoute} />
      </Switch>
    </div>
  </div>
);
