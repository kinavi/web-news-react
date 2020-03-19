import React from 'react';
import {connect} from 'react-redux';

import {removeNews} from '../store/Actions';

const NewsLite = ({_id, title, fileName, setEdit, onRemove}) =>{
  const handlerEdit = () =>{
    setEdit(true);
  };
  const handlerRemove = () =>{
    onRemove(_id);
  };

  return (

    <div className="cms__lite-news lite-news">
      <div className='lite-news__img-container' >
        <img className="img" src={`/${fileName}`} alt=""/>
      </div>
      <div className="lite-news__title">{title}</div>

      <div className='lite-news__btn-container' >
        <button
          className='btn lite-news__btn's
          onClick={handlerEdit}>Edit</button>
        <button
          className='btn lite-news__btn'
          onClick={handlerRemove}>Remove</button>
      </div>

    </div>
  );
};
const mapDispatchToProps = (dispatch) =>({
  onRemove(id) {
    dispatch(removeNews(id));
  },

});
export default connect(
    null,
    mapDispatchToProps,
)(NewsLite);
