import React from 'react';
// import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import {EditorPreview, EditorNews} from '.';
import {Link, useHistory} from 'react-router-dom';

export const NewsPreview = ({id, title, description, fileName}) => {

  const history = useHistory();

  const handleClick = (e) =>{
    // _onCreateNews(title, description,file)
    e.stopPropagation();
    history.push(`/news/${id}`); a;
  };

  return (
    <div className="shadow card rounded mb-5" onClick={handleClick}>
      <img src={fileName} className=" card-img-top" />
      <div className="card-body">
        <div className="card-title h3">{title}</div>
        <EditorNews isEdit={true} value={description}/>
        {/* <EditorPreview isEdit={true} value={description}/> */}
        {/* <div className="card-text text-muted">{ ReactHtmlParser(description) }</div> */}
      </div>
    </div>
  );
};
