import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';


import {addNews, loadFile} from '../../../store/Actions/index';
import {TitleField, ButtonSelectImg} from '../../FormElements';
import {EditNewsEditor} from '../../editor';

const AddNewForm = ({_onCreateNews})=>{
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  const history = useHistory();

  const handleCreate = () =>{
    _onCreateNews(title, description, file);
    window.scrollTo(0, 0);
    history.push('/cms');
  };

  const handleBack = () =>{
    history.push('/cms');
  };

  return (
    <div className="add-form">
      <ButtonSelectImg value={file} setValue={setFile}/>
      <TitleField value={title} setValue={setTitle}/>
      <EditNewsEditor isEdit={false} value={description} setValue={setDescription}/>

      <div className='add-form__container-btns'>
        {/* <Button onClick={()=>{}}>Предосмотр</Button> */}
        <button className='btn add-form__btn' onClick={handleCreate}>Создать</button>
        <button className='btn add-form__btn' onClick={handleBack}>Отмена</button>
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
)(AddNewForm);


