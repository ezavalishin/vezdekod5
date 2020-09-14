import bridge from '@vkontakte/vk-bridge';
import {IFormInput} from '../types/forms';

export const shareWall = (data: IFormInput) => {
  const appLink = 'http://vk.com/app7595898/#/item';

  return bridge.send('VKWebAppShowWallPostBox', {
    message: `${data.title} \n\n\n ${appLink}`
  });
};
