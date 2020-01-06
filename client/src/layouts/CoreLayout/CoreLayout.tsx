import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Launch } from 'components/Launch';
import { Launches } from 'components/Launches';
import { Header } from 'components/Header';
import './CoreLayout.css';

export const CoreLayout: React.FC<{}> = () => (
  <div className="CoreLayout">
    <Header />
    <div className="CoreLayout-content">
      <Switch>
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
      </Switch>
    </div>
  </div>
);
