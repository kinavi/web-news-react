import React, {useState, useRef} from 'react';

import {Img} from '.';

export const ButtonSelectImg = ({value, setValue}) =>{
  // const [refFileInp, setRefFileInp] = useState();
  const input = useRef();
  return (
    <div className='btn__img'>
      <input
        // ref={(node)=>setRefFileInp(node)}
        ref={input}
        style={{display: 'none'}}
        type="file"
        name="filedata"
        onChange={(e)=>setValue(e.target.files[0])}/>
      <div className="btn__img-group">
        <div className="cms__title">Картинка</div>
        <div className='btn__container-img' onClick={()=>input.current.click()}>
          {!!value?<Img file={value}/>:<div className='btn__layer' >Выберите картинку</div>}
        </div>
        {/* <button className='btn' >Выберите картинку</button> */}
      </div>
    </div>
  );
};
