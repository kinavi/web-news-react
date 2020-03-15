import React, {useState} from 'react';

import IMG from './IMG';

export const TitleField = ({value = '', setValue}) =>
  <div className="add-form__container-title">
    <div className="add-form__title title">Заголовок</div>
    <input
      className="add-form__title-input"
      onChange={(e)=>setValue(e.target.value)}
      value = {value}/>
  </div>;

export const ButtonSelectImg = ({value, setValue}) =>{
  const [refFileInp, setRefFileInp] = useState();

  return (
    <div className='add-form__img'>
      <input
        ref={(node)=>setRefFileInp(node)}
        style={{display: 'none'}}
        type="file"
        name="filedata"
        onChange={(e)=>setValue(e.target.files[0])}/>
      <div className="add-form__img-group">
        <div className="add-form__title-picture title">Картинка</div>
        <div className='add-form__container-img'>
          {!!value?<IMG file={value}/>:<div></div>}
        </div>
        <button className='btn' onClick={()=>refFileInp.click()}>Выберите картинку</button>
      </div>
    </div>
  );
};
