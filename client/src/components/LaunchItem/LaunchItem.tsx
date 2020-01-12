import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

export const LaunchItem: React.FC<{ launch: Launch }> = ({ launch }) => (
  <Card centered as={Link} to={`/launch/${launch.flight_number}`}>
    <Card.Content>
      <Card.Header>{launch.mission_name}</Card.Header>
      <Card.Meta>
        <Icon name="calendar" />
        {launch.launch_date_local}
      </Card.Meta>
      <Card.Description>
        <Icon name="rocket" />
        {launch.rocket.rocket_name}
      </Card.Description>
    </Card.Content>
  </Card>
);
