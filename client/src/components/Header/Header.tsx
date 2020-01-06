import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: React.FC<{}> = () => (
  <header className={styles.header} data-testid="header">
    <Link to="/">SpaceX</Link>
  </header>
);
