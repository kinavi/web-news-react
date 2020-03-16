import React from 'react';
import {EditorPreview} from '.';
import {useHistory} from 'react-router-dom';

const FullNews = ({id, title, description, fileName}) => {
  const history = useHistory();

  const handleClick = () =>{
    // _onCreateNews(title, description,file)
    history.push(`/news/${id}`);
  };

  return (
    <div className="news" onClick={handleClick}>
      {/* <img src={fileName} className="news__img img" /> */}
      <div className='news__title-container'>
        <div className='title-news'>
          <div className="title-news__author">Author</div>
          <div className="title-news__title">{title}</div>
        </div>
      </div>
      <EditorPreview isEdit={true} value={description}/>
    </div>
  );
};


export default FullNews;
