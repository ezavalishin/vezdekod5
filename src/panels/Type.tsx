import React, {FC} from 'react';
import {Banner, Group, IOS, Panel, PanelHeader, PanelHeaderButton, platform} from '@vkontakte/vkui';
import {useRouter} from '@happysanta/router';
import {Icon24Back, Icon28CalendarOutline, Icon28ChevronBack, Icon28TargetOutline} from '@vkontakte/icons';
import {useRecoilState} from 'recoil';
import {GOAL, REGULAR, typeState} from '../store';
import {PAGE_SETTINGS} from '../router';


interface TypePanelProps {
  id: string
}

const Type:FC<TypePanelProps> = ({id}) => {
  const router = useRouter();
  const osName = platform();

  const [, setType] = useRecoilState(typeState);

  const choose = (value) => {
    setType(value);

    router.pushPage(PAGE_SETTINGS);
  };

  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderButton onClick={() => router.popPage()}>
        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
      </PanelHeaderButton>}>
        Тип сбора
      </PanelHeader>
      <Group>
        <Banner before={<Icon28TargetOutline fill="var(--accent)" />} header="Целевой сбор" subheader="Когда есть определённая цель" asideMode="expand" onClick={() => choose(GOAL)} />
        <Banner before={<Icon28CalendarOutline fill="var(--accent)" />} header="Регулярный сбор" subheader="Если помощь нужна ежемесячно" asideMode="expand" onClick={() => choose(REGULAR)} />
      </Group>
    </Panel>
  );
};

export default Type;
