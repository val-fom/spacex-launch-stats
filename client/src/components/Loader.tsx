import React from 'react';
import { Loader as SLoader } from 'semantic-ui-react';

export const Loader: React.FC<{}> = () => (
  <SLoader active inline="centered" size="big" data-testid="loader" />
);
