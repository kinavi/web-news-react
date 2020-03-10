import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';


import {addNews, loadFile} from '../../store/Actions/index';
import {TitleField, ButtonSelectImg} from '../FormElements';
import AddNewsEditor from '../AddNewsEditor';

const FormAddNew = ({_onCreateNews})=>{
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  const history = useHistory();

  const handleCreate = () =>{
    _onCreateNews(title, description, file);
    history.push('/cms');
  }

  const handleBack = () =>{
    history.push('/cms');
  }

  return (
    <div style={{background: '#FFE3B3'}} className=" shadow rounded mt-2 p-2 mb-4">
      <ButtonSelectImg value={file} setValue={setFile}/>
      <TitleField value={title} setValue={setTitle}/>
      <AddNewsEditor isEdit={false} value={description} setValue={setDescription}/>

      <div>
        {/* <Button onClick={()=>{}}>Предосмотр</Button> */}
        <Button onClick={handleCreate}>Создать</Button>
        <Button onClick={handleBack}>Отмена</Button>
      </div>

    </div>
  );
};
const mapDispatchToProps = (dispatch) =>({
  _onCreateNews(title, description, file) {
    dispatch(addNews(title, description, file.name));

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
)(FormAddNew);


