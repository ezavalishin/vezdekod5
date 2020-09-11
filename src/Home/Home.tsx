import React, { FC } from 'react';
import { Group, Panel } from '@vkontakte/vkui';

interface HomeProps {
  id: string;
}

const Home: FC<HomeProps> = ({ id }) => {
  return (
    <Panel
      id={id}
    >
      <Group>
        Home
      </Group>
    </Panel>
  );
};

export default Home;
