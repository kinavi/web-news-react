import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Button as button} from 'react-bootstrap';

import {EditorNews, TitleField, ButtonSelectImg} from '.';
import {editNews, loadFile} from '../store/Actions';

const NewsEdit = ({_id, title, description, fileName, onEdit, setEdit}) =>{
  const [_title, setTitle] = useState(title);
  const [file, setFile] = useState();
  const [_description, setDescription] = useState(description);
  const [scrollY, setScrollY] = useState(window.pageYOffset);
  const [scrollX, setScrollX] = useState(window.pageXOffset); // Надо ли?

  const handlerSave = () =>{
    onEdit(_id, _title, _description, file, fileName); // Тут баг с file
    setEdit(false);
    window.scrollTo(scrollX, scrollY);
  };

  const handlerCancel = () =>{
    setEdit(false);
    window.scrollTo(scrollX, scrollY);
  };

  return (
    <div className="add-form">
      <ButtonSelectImg value={file} setValue={setFile}/>
      <TitleField value={_title} setValue={setTitle}/>
      <EditorNews
        isEdit={false}
        value={_description}
        setValue={setDescription}/>
      <div className='add-form__container-btns' >
        {/* <Button >Предосмотр</Button> */}
        <button className='btn add-form__btn' onClick={handlerSave}>Save</button>
        <button className='btn add-form__btn' onClick={handlerCancel}>Cancel</button>
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) =>({
  onEdit(id, title, description, newfile, oldfile) {
    // Нужен рефакторинг
    if (!newfile) {
      dispatch(editNews(id, title, description, oldfile));

    }
    else {
      dispatch(editNews(id, title, description, newfile.name));
      // Колхоз, надо в отдельную функцию
      const data = new FormData();
      data.append('file', newfile);
      data.append('user', 'hubot');

      loadFile(data);
    }
  },
});
export default connect(
    null,
    mapDispatchToProps,
)(NewsEdit);
