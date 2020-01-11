import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router } from 'react-router-dom';
import { CoreLayout } from 'layouts/CoreLayout';
import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({
  uri: '/graphql',
});

const App: React.FC = () => (
  <Router>
    <ApolloProvider client={client}>
      <CoreLayout />
    </ApolloProvider>
  </Router>
);

export default App;
