import React, {useState} from 'react';
import AddNewForm from './AddNews';
import EditNews from './EditNews';

import {CustomeEditor} from '../../editor';
import {loadFile} from '../../../store/fetchs/cms';

import {
  FormHeader,
  ButtonSelectImg,
  FormInput,
  FormGroupButton,
} from './elements';

const FormContainer = ({
  title,
  description,
  fileName,
  onSubmit,
  onCancel,
}) =>{
  const [_title, setTitle] = useState(title);
  const [_file, setFile] = useState();
  const [_description, setDescription] = useState(description);

  const handlerSubmit = () =>{
    if (!_file&&!fileName) {
      return null; // нужен alert
    } else if (!_file) {
      onSubmit(_title, _description, fileName);
    } else {
      onSubmit(_title, _description, _file.name);
      loadImg();
    }
  };

  const loadImg = () =>{
    const data = new FormData();
    data.append('file', _file);
    data.append('user', 'hubot');

    loadFile(data);
  };

  return (
    <div className="cms__form">
      <FormHeader>
        <ButtonSelectImg value={_file} setValue={setFile} fileName={fileName}/>
        <FormInput value={_title} setValue={setTitle}/>
      </FormHeader>
      <div className='cms__title'>Описание</div>
      <CustomeEditor
        isEdit={true}
        value={_description}
        setValue={setDescription}/>
      <FormGroupButton onSubmit={handlerSubmit}>
        <button
          className='btn form__btn'
          onClick={handlerSubmit}>Submit</button>
        <button
          className='btn form__btn'
          onClick={onCancel}>Cancel</button>
      </FormGroupButton>
    </div>
  );
};


export {
  AddNewForm,
  EditNews,
  FormContainer,
};
