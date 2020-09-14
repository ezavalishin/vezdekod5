import React, {useEffect, useState} from 'react';
import {RouterContext} from '@happysanta/router';
import {router} from '../router';
import {RecoilRoot} from 'recoil';
import Root from './Root';
import {ConfigProvider, WebviewType} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import {AppearanceSchemeType} from '@vkontakte/vk-bridge/dist/types/src/types/data';

const App = () => {

  const [scheme, setScheme] = useState<AppearanceSchemeType>('bright_light');
  const lights = ['bright_light', 'client_light'];

  function updateScheme( scheme, needChange = false ) {
    let isLight = lights.includes( scheme );

    if( needChange ) {
      isLight = !isLight;
    }
    setScheme( isLight ? 'bright_light' : 'space_gray' );
  }

  useEffect(() => {
    bridge.subscribe((data) => {
      if ( data.detail.type === 'VKWebAppUpdateConfig' ) {
        updateScheme( data.detail.data.scheme );
      }
    });
    bridge.send('VKWebAppInit');
  }, []);


  return (
    <ConfigProvider scheme={scheme} webviewType={WebviewType.VKAPPS} isWebView={true}>
      <RouterContext.Provider value={router}>
        <RecoilRoot>
          <Root />
        </RecoilRoot>
      </RouterContext.Provider>
    </ConfigProvider>
  );
};

export default App;
