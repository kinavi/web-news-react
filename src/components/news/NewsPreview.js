import React from 'react';
import {useHistory} from 'react-router-dom';

const BigLayer = ({_id, title, fileName, author}) =>{

  const history = useHistory();

  const handleClick = (e) =>{
    e.stopPropagation();
    history.push(`/news/${_id}`);
  };

  return (
    <div className="preview_big" onClick={handleClick}>
      <img className="img" src={fileName} alt=""/>
      <div className="preview__text-block">
        <div className='preview__title-content'>
          <div className="preview__author">{author}</div>
          <div className="preview__title">{title}</div>
        </div>
      </div>
    </div>
  );
};

const SmallLayer = ({_id, title, fileName}) =>{

  const history = useHistory();

  const handleClick = (e) =>{
    e.stopPropagation();
    history.push(`/news/${_id}`);
  };

  return (
    <div className="preview__item_small">
      <div className='img-container' onClick={handleClick} >
        <img className="img" src={fileName} alt=""/>
        <div className='img-container__layer'></div>
      </div>
      <div className="preview__text-block_small" onClick={handleClick}>
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
