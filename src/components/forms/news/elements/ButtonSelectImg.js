import React, {useRef} from 'react';

import {Img} from '.';

import photo from './camera.svg';

import './ButtonSelectImg.css';


export const ButtonSelectImg = ({value, setValue, fileName}) =>{
  const input = useRef();
  return (
    <div className='btn__img'>
      <input
        ref={input}
        style={{display: 'none'}}
        type="file"
        name="filedata"
        onChange={(e)=>setValue(e.target.files[0])}/>
      <div className="btn__img-group">
        <div className="cms__title">Картинка</div>
        <div className='btn__container-img' onClick={()=>input.current.click()}>
          {!!value?<Img file={value}/>:<img className='btn__layer' src={photo&&fileName} />}
        </div>
      </div>
    </div>
  );
};
