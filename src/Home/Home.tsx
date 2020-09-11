import React, { FC } from 'react';
import { Group, Panel, PanelHeader } from '@vkontakte/vkui';

interface HomeProps {
  id: string;
}

const Home: FC<HomeProps> = ({ id }) => {
  return (
    <Panel
      id={id}
    >
      <PanelHeader>
        header
      </PanelHeader>
      <Group>
        Home
      </Group>
    </Panel>
  );
};

export default Home;
