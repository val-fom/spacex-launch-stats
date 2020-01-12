import React from 'react';
import { Header as SHeader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const Header: React.FC<{}> = () => (
  <SHeader data-testid="header" as="h1">
    <Link to="/">SpaceX</Link>
  </SHeader>
);
