import React from 'react';
import {Root as ViewRoot, View} from '@vkontakte/vkui';
import {
  PANEL_ADDITIONAL,
  PANEL_DETAIL,
  PANEL_MAIN,
  PANEL_SETTINGS,
  PANEL_TYPE,
  VIEW_DETAIL,
  VIEW_MAIN
} from '../router';
import {useLocation} from '@happysanta/router';
import Start from '../panels/Start';
import Type from '../panels/Type';
import Settings from '../panels/Settings';
import Additional from '../panels/Addiitional';
import Detail from '../panels/Detail';


const Root = () => {
  const location = useLocation();

  return (
    <ViewRoot activeView={location.route.getViewId()}>
      <View id={VIEW_MAIN} activePanel={location.getViewActivePanel(VIEW_MAIN)} history={location.getViewHistory(VIEW_MAIN)}>
        <Start id={PANEL_MAIN} />
        <Type id={PANEL_TYPE} />
        <Settings id={PANEL_SETTINGS} />
        <Additional id={PANEL_ADDITIONAL} />
      </View>
      <View id={VIEW_DETAIL} activePanel={location.getViewActivePanel(VIEW_DETAIL)} history={location.getViewHistory(VIEW_DETAIL)}>
        <Detail id={PANEL_DETAIL} />
      </View>
    </ViewRoot>
  );
};

export default Root;
