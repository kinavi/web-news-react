import React, {useState} from 'react';
import {connect} from 'react-redux';

import {editNews} from '../../../store/fetchs/cms';

import {FormContainer} from './';


const EditNews = (props) =>{
  const {_id, onSave, setEdit} = props;
  const [scrollY, setScrollY] = useState(window.pageYOffset);
  const [scrollX, setScrollX] = useState(window.pageXOffset); // Надо ли?

  const handlerSubmit = (title, description, fileName) =>{
    onSave(_id, title, description, fileName);
    setEdit(false);
    window.scrollTo(scrollX, scrollY);
  };

  const handlerCancel = () =>{
    setEdit(false);
    window.scrollTo(scrollX, scrollY);
  };

  return (
    <FormContainer
      {...props}
      onSubmit={handlerSubmit} onCancel={handlerCancel}/>
  );
};

const mapDispatchToProps = (dispatch) =>({
  onSave(id, title, description, fileName) {
    dispatch(editNews(id, title, description, fileName));
  },
});
export default connect(
    null,
    mapDispatchToProps,
)(EditNews);
