import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LaunchRoute } from 'routes/LaunchRoute';
import { LaunchesRoute } from 'routes/LaunchesRoute';
import { Header } from 'components/Header';
import { Container } from 'semantic-ui-react';

export const CoreLayout: React.FC<{}> = () => (
  <Container>
    <Header style={{ marginTop: '2rem' }} />
    <Switch>
      <Route exact path="/" component={LaunchesRoute} />
      <Route exact path="/launch/:flight_number" component={LaunchRoute} />
    </Switch>
  </Container>
);
