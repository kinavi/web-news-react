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
    <div className="shadow card rounded mb-5" onClick={handleClick}>
      <img src={fileName} className=" card-img-top" />
      <div className="card-body">
        <div className="card-title h3">{title}</div>
        <EditorPreview isEdit={true} value={description}/>
      </div>
    </div>
  );
};


export default FullNews;
