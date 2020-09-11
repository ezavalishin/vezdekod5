import React, { useState } from 'react';

// styles
import '@vkontakte/vkui/dist/vkui.css';
import { View } from '@vkontakte/vkui';
import Home from './Home';

// components


const App = () => {
  const [activePanel, setActivePanel] = useState('home');
  const [popout, setPopout] = useState();

  return (
    <View
      activePanel={activePanel}
      popout={popout}
    >
      <Home id="home"/>
    </View>
  );
};

export default App;
