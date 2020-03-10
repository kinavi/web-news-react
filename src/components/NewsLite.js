import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

import {removeNews} from '../store/Actions';

const NewsLite = ({id, title, setEdit, onRemove}) =>{

  const handlerEdit = () =>{
    setEdit(true);
  };
  const handlerRemove = () =>{
    onRemove(id);
  };

  return (
    <div className="shadow mb-2">
      <div style={{background: '#af9b79'}} className="d-flex rounded">
        <div
          className="align-self-center ml-2 rounded text-white flex-fill">{title}</div>
        <Button
          onClick={handlerEdit}
          size="sm"
          className="m-2">Изменить</Button>
        <Button
          onClick={handlerRemove}
          variant="danger" size="sm"
          className="m-2">Удалить</Button>
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
