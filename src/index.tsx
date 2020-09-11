import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import { RecoilRoot } from 'recoil';

// Init VK  Mini App
bridge.send('VKWebAppInit');

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>, document.getElementById('root'));
