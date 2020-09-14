import React, {FC} from 'react';
import {
  Button,
  FormLayout, FormLayoutGroup,
  Input,
  IOS,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  platform, Radio,
  Select,
  Textarea
} from '@vkontakte/vkui';
import {useRouter} from '@happysanta/router';
import {Icon24Back, Icon28ChevronBack} from '@vkontakte/icons';
import {useRecoilState} from 'recoil';
import {formDataState, REGULAR, typeState} from '../store';
import {useForm} from 'react-hook-form';
import {shareWall} from '../utils/vk-api';


interface AdditionalPanelProps {
  id: string
}

const Additional:FC<AdditionalPanelProps> = ({id}) => {

  const router = useRouter();
  const osName = platform();
  const {handleSubmit, register, errors} = useForm();
  const [formData, setFormData] = useRecoilState(formDataState);


  const onSubmit = (data) => {
    setFormData(data);

    shareWall(formData);
  };


  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderButton onClick={() => router.popPage()}>
        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
      </PanelHeaderButton>}>
        Дополнительно
      </PanelHeader>
      <FormLayout onSubmit={handleSubmit(onSubmit)}>
        <Select name="author" defaultValue={formData.author} top="Автор" getRef={register({required: true})} status={errors.author ? 'error' : 'default'}>
          <option selected value="ma">Матвей Правосудов</option>
        </Select>

        <FormLayoutGroup top="Сбор завершится" status={errors.endType ? 'error' : 'default'}>
          <Radio checked name="endType" value="sum" getRef={register({required: true})}>Когда соберём сумму</Radio>
          <Radio name="endType" value="date" getRef={register({required: true})}>В определённую дату</Radio>
        </FormLayoutGroup>

        <Input name="endAt" defaultValue={formData.endAt} type="date" placeholder="Введите дату" top="Дата окончания" getRef={register({required: true})} status={errors.endAt ? 'error' : 'default'}/>
        <Button size="l" stretched={true}>
          Создать сбор
        </Button>
      </FormLayout>
    </Panel>
  );
};

export default Additional;
