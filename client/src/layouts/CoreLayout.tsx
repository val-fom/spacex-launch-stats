import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LaunchRoute } from 'routes/LaunchRoute';
import { LaunchesRoute } from 'routes/LaunchesRoute';
import { Header } from 'components/Header';
import './CoreLayout.css';

export const CoreLayout: React.FC<{}> = () => (
  <div className="CoreLayout">
    <Header />
    <div className="CoreLayout-content">
      <Switch>
        <Route exact path="/" component={LaunchesRoute} />
        <Route exact path="/launch/:flight_number" component={LaunchRoute} />
      </Switch>
    </div>
  </div>
);
