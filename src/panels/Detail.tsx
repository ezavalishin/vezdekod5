import React, {FC} from 'react';
import {Button, Caption, Div, FixedLayout, Panel, Separator, Subhead, Title} from '@vkontakte/vkui';
import './Detail.css';


interface DetailPanelProps {
  id: string
}

const Detail:FC<DetailPanelProps> = ({id}) => {

  return (
    <Panel id={id}>
      <div className="Detail" />
      <Div>
        <Title weight="bold" level="1">Добряши помогают котикам</Title>
        <Subhead weight="semibold">Автор Матвей Правосудов</Subhead>
        <Caption weight="regular" level="1">Помощь нужна каждый месяц</Caption>
      </Div>

      <Separator />

      <Div>
        <Subhead weight="regular">Нужно собрать в сентябре</Subhead>

        <div className="Detail__line Detail__line--big">
          <div className="Detail__line-i" style={{width: '60%'}}>8 750</div>
          10 000
        </div>
      </Div>

      <Separator />

      <Div>
        Привет-привет, добряш!<br /><br />

        Я создал это событие, чтобы показать какие у меня прекрасные добряши и буду счастлив, если получится вдохновить кого-нибудь хотя бы на маленький перевод в пользу фонда Юна.<br /><br />

        ◾ Если получится собрать 1 000 рублей, то это будет 5 обработанных животных от блох и клещей.<br /><br />

        ◾ Собранные 5 000 рублей превратятся в 25 кг корма для подопечных фонда.<br /><br />

        ◾ А 10 000 рублей позволят провести курс занятий с кинологом по социализации сложной собаки. Чтобы она легче нашла свой дом.<br /><br />

        В благотворительности не бывает маленьких сумм, поэтому если вы хотите помочь, то переведите любую сумму, будь-то 10 рублей или 1000 💚
      </Div>

      <FixedLayout vertical="bottom">
        <Separator wide={true} />
        <div className="Detail__footer">
          <div className="Detail__footer-l">
            <Subhead weight="regular">Собрано 8 750 ₽ из 10 000 ₽</Subhead>
            <div className="Detail__line">
              <div className="Detail__line-i" style={{width: '60%'}} />
            </div>
          </div>
          <div className="Detail__footer-r">
            <Button mode="commerce">Помочь</Button>
          </div>
        </div>
      </FixedLayout>
    </Panel>
  );
};

export default Detail;
