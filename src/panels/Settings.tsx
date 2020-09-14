import React, {FC} from 'react';
import {
  Button,
  FormLayout,
  Input,
  IOS,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  platform,
  Select,
  Textarea
} from '@vkontakte/vkui';
import {useRouter} from '@happysanta/router';
import {Icon24Back, Icon28ChevronBack} from '@vkontakte/icons';
import {useRecoilState} from 'recoil';
import {formDataState, REGULAR, Type, typeState} from '../store';
import {PAGE_ADDITIONAL} from '../router';
import {useForm} from 'react-hook-form';
import {IFormInput} from '../types/forms';
import ImageInput from '../components/ImageInput';
import {shareWall} from '../utils/vk-api';


interface SettingsPanelProps {
  id: string
}

const Settings:FC<SettingsPanelProps> = ({id}) => {
  const router = useRouter();
  const osName = platform();
  const [type, ] = useRecoilState(typeState);
  const [formData, setFormData] = useRecoilState(formDataState);

  const { register, handleSubmit, errors } = useForm<IFormInput>();


  const onSubmit = (data: IFormInput) => {

    if (data.cover) {
      data.cover = data.cover[0];
    }
    setFormData(data);

    if (type === Type.Regular) {
      shareWall(data);
    } else {
      router.pushPage(PAGE_ADDITIONAL);
    }
  };


  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderButton onClick={() => router.popPage()}>
        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
      </PanelHeaderButton>}>
        {type === REGULAR ? 'Регулярный сбор' : 'Целевой сбор'}
      </PanelHeader>
      <FormLayout onSubmit={handleSubmit(onSubmit)}>
        <ImageInput name="cover" defaultImage={formData.cover} getRef={register({required: true})} status={errors.cover ? 'error' : 'default'} />
        <Input name="title" defaultValue={formData.title} type="text" placeholder="Название сбора" top="Название сбора" getRef={register({required: true})} status={errors.title ? 'error' : 'default'}/>
        <Input name="sum" defaultValue={formData.sum} type="number" placeholder="Сколько нужно собрать?" top="Сумма, ₽" getRef={register({required: true})} status={errors.sum ? 'error' : 'default'}/>
        <Input name="goal" defaultValue={formData.goal} type="text" placeholder="Например, лечение человека" top="Цель" getRef={register({required: true})} status={errors.goal ? 'error' : 'default'}/>
        <Textarea name="description" defaultValue={formData.description} placeholder="На что пойдут деньги и как они кому-то помогут?" top="Описание" getRef={register({required: true})} status={errors.description ? 'error' : 'default'}/>
        <Select name="destination" defaultValue={formData.destination} top="Куда получать деньги" getRef={register({required: true})} status={errors.destination ? 'error' : 'default'}>
          <option selected value="m">Счёт VK Pay · 1234</option>
          <option value="k">Счёт VK Pay · 5678</option>
        </Select>
        {type === REGULAR && <Select name="author" defaultValue={formData.author} top="Автор" getRef={register({required: true})} status={errors.author ? 'error' : 'default'}>
          <option selected value="ma">Матвей Правосудов</option>
        </Select>}
        <Button size="l" stretched={true}>
          {type === REGULAR ? 'Создать сбор' : 'Далее'}
        </Button>
      </FormLayout>
    </Panel>
  );
};

export default Settings;
