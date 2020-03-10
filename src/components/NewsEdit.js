import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

import {EditorNews, TitleField, ButtonSelectImg} from '.';
import {editNews, loadFile} from '../store/Actions';

const NewsEdit = ({id, title, description, onEdit, setEdit}) =>{
  const [_title, setTitle] = useState(title);
  const [file, setFile] = useState();
  const [_description, setDescription] = useState(description);

  const handlerSave = () =>{
    onEdit(id, _title, _description, file); // Тут баг с file
    setEdit(false);
  };

  const handlerCancel = () =>{
    setEdit(false);
  };

  return (
    <div style={{background: '#FFE3B3'}} className="shadow rounded mt-2 p-2 mb-4">
      <ButtonSelectImg value={file} setValue={setFile}/>
      <TitleField value={_title} setValue={setTitle}/>
      <EditorNews
        isEdit={false}
        value={_description}
        setValue={setDescription}/>
      <div>
        {/* <Button >Предосмотр</Button> */}
        <Button onClick={handlerSave}>Save</Button>
        <Button onClick={handlerCancel}>Cancel</Button>
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) =>({
  onEdit(id, title, description, file) {
    // dispatch(editNews(id, title, description)) {pathname:"/cms/edit", search:`?id=${n.id}`}

    dispatch(editNews(id, title, description, file.name));

    // Колхоз, надо в отдельную функцию
    const data = new FormData();
    data.append('file', file);
    data.append('user', 'hubot');

    loadFile(data);
  },
});
export default connect(
    null,
    mapDispatchToProps,
)(NewsEdit);
