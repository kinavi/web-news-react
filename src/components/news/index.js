import NewsLite from './NewsLite';
import {NewsPreview} from './NewsPreview';
import ListNewsMain from './ListNewsMain';

import React from 'react';
import {EditorView} from '../editor';

const News = ({_id, title, description, fileName}) => {

  return (
    <div className="news" >
      {/* <img src={fileName} className="news__img img" /> */}
      <div className='news__title-container'>
        <div className='title-news'>
          <div className="title-news__author">Author</div>
          <div className="title-news__title">{title}</div>
        </div>
      </div>
      <EditorView isEdit={true} value={description}/>
    </div>
  );
};

export {
  News,
  NewsLite,
  NewsPreview,
  ListNewsMain,
};