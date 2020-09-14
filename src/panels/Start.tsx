import React, {FC} from 'react';
import {Button, Panel, PanelHeader, Placeholder} from '@vkontakte/vkui';
import {useRouter} from '@happysanta/router';
import {PAGE_TYPE} from '../router';


interface StartPanelProps {
  id: string
}

const Start:FC<StartPanelProps> = ({id}) => {

  const router = useRouter();

  const handleClick = () => {
    router.pushPage(PAGE_TYPE);
  };

  return (
    <Panel id={id}>
      <PanelHeader>
        Пожертвования
      </PanelHeader>
      <Placeholder action={<Button size="m" onClick={handleClick}>Создать сбор</Button>} stretched={true}>
        <div>У Вас пока нет сборов.</div>
        <div>Начните доброе дело.</div>
      </Placeholder>
    </Panel>
  );
};

export default Start;
