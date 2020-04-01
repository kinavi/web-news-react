import React from 'react';

import {NewsFormSwitcher} from './NewsFormSwitcher';

export const ContainerNews = ({news}) =>{
  return (
    <div className="cms__container-news">
      {(!!news)?
        news.map((item, i)=>
          <NewsFormSwitcher key={i} {...item} />):
        <div>Новостей нет</div>
      }
    </div>
  );
};
