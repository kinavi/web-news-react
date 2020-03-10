import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';
// import {Button} from 'react-bootstrap';

// import {removeNews} from '../store/Actions';
import {NewsEdit, NewsLite} from '.';

export const NewsSelectorForm = ({id, title, description}) =>{
  const [isEdit, setEdit] = useState(false);

  return (
      (isEdit)?
        <NewsEdit
          id={id}
          title={title}
          description={description}
          setEdit={setEdit}/>:
        <NewsLite
          id={id}
          title={title}
          setEdit={setEdit} />
  );
};
