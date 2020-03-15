import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';
// import {Button} from 'react-bootstrap';


// import {removeNews} from '../store/Actions';
import {NewsEdit, NewsLite} from '.';

export const NewsSelectorForm = (props) =>{
  const [isEdit, setEdit] = useState(false);

  return (
      (isEdit)?
        <NewsEdit
          {...props}
          // id={id}
          // title={title}
          // description={description}
          setEdit={setEdit}
          
          />:
        <NewsLite
        {...props}
          // id={id}
          // title={title}
          setEdit={setEdit} 
          />
  );
};
