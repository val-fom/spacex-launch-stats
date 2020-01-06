import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header: React.FC<{}> = () => (
  <header className="Header" data-testid="header">
    <Link to="/">SpaceX</Link>
  </header>
);
