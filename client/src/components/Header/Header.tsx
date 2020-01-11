import React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const Header: React.FC<{}> = () => (
  <SemanticHeader data-testid="header">
    <Link to="/">SpaceX</Link>
  </SemanticHeader>
);
