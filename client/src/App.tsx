import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Launches } from './components/Launches';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">SpaceX</header>
      <div className="App-content">
        <Launches />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
