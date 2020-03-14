import React from 'react';
// import {EditorPreview, EditorNews} from '.';
import {useHistory} from 'react-router-dom';

const BigLayer = ({id, title, fileName}) =>{

  const history = useHistory();

  const handleClick = (e) =>{
    // _onCreateNews(title, description,file)
    e.stopPropagation();
    history.push(`/news/${id}`); a;
  };

  return (
    <div className="preview_big" onClick={handleClick}>
      <img className="img" src={fileName} alt=""/>
      <div className="preview__text-block">
        <span className="preview__author">Author</span>
        <span className="preview__title">{title}</span>
      </div>
    </div>
  );
};

const SmallLayer = ({id, title, fileName}) =>{

  const history = useHistory();

  const handleClick = (e) =>{
    // _onCreateNews(title, description,file)
    e.stopPropagation();
    history.push(`/news/${id}`); a;
  };

  return (
    <div className="preview__item_small" onClick={handleClick}>
      <div className='img-container' >
        <img className="img" src={fileName} alt=""/>
      </div>
      <div className="preview__text-block_small">
        <span>{title}</span>
      </div>
    </div>
  );
};

export const FORMAT_NEWS = {
  LEFT: 'lEFT',
  RIGHT: 'RIGHT',
};

export const NewsPreview = ({format, value, bignews, smallnews}) =>{
  switch (format) {
    case FORMAT_NEWS.RIGHT:
      return (
        <div className="container__item">
          <div className="container_small">
            {value[0]&&<SmallLayer {...value[0]} />}
            {value[1]&&<SmallLayer {...value[1]} />}
          </div>
          {value[2]&&<BigLayer {...value[2]} />}
        </div>
      );
    case FORMAT_NEWS.LEFT:
      return (
        <div className="container__item">
          {value[0]&&<BigLayer {...value[0]} />}
          <div className="container_small">
            {value[1]&&<SmallLayer {...value[1]} />}
            {value[2]&&<SmallLayer {...value[2]} />}
          </div>
        </div>
      );
    default:
      return <div>No format</div>;
  }
};
