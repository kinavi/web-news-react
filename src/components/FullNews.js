import React from 'react';
import {EditorView} from '.';
import {useHistory} from 'react-router-dom';

const FullNews = ({_id, title, description, fileName}) => {
  // const history = useHistory();

  // const handleClick = () =>{
  //   // _onCreateNews(title, description,file)
  //   history.push(`/news/${_id}`);
  // }; onClick={handleClick}

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


export default FullNews;
