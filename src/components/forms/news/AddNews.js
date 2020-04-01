import React from 'react';
import {connect} from 'react-redux';

import {addNews} from '../../../store/fetchs/cms';
import {FormContainer} from './';

const AddNewForm = (props)=>{
  const {userId, login, onAddNews, onClose} = props;

  const handlerSubmit = (title, description, fileName) =>{
    onAddNews(userId, login, title, description, fileName);
    window.scrollTo(0, 0);
    onClose();
  };

  const handlerCancel = () =>{
    onClose();
  };

  return (
    <FormContainer
      {...props}
      onSubmit={handlerSubmit} onCancel={handlerCancel}/>
  );
};
const mapStateToProps = (state) =>({
  userId: state.Auth.id,
  login: state.Auth.login,
});

const mapDispatchToProps = (dispatch) =>({
  onAddNews(userId, author, title, description, fileName) {
    dispatch(addNews(userId, author, title, description, fileName));
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddNewForm);


