import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

// TODO: cosider to remove it
export function renderWithRouter(
  ui: React.ReactElement,
  { route = '/' } = {}
): RenderResult {
  const Wrapper: React.FC<{}> = ({ children }) => (
    <Router initialEntries={[route]}>{children}</Router>
  );
  return render(ui, { wrapper: Wrapper });
}
