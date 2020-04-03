import NewsLite from './NewsLite';
import {NewsPreview} from './NewsPreview';
import {ListNewsMain} from './ListNewsMain';

import React from 'react';
import {EditorView, CustomeEditor} from '../editor';

const News = ({_id, title, description, fileName, author}) => {

  return (
    <div className="news" >
      {/* <img src={fileName} className="news__img img" /> */}
      <div className='news__title-container'>
        <div className='title-news'>
          <div className="title-news__author">{author}</div>
          <div className="title-news__title">{title}</div>
        </div>
      </div>
      <CustomeEditor isEdit={false} value={description}/>
    </div>
  );
};

export {
  News,
  NewsLite,
  NewsPreview,
  ListNewsMain,
};