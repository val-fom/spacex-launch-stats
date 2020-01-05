import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Launches } from './components/Launches';
import { Launch } from './components/Launch';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
});

const App: React.FC = () => (
  <Router>
    <ApolloProvider client={client}>
      <div className="App">
        <Link to="/">
          <header className="App-header">SpaceX</header>
        </Link>
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </Switch>
        </div>
      </div>
    </ApolloProvider>
  </Router>
);

export default App;
