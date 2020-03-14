import React, {useState, useEffect} from 'react';

const IMG = ({file}) =>{
  const [src, setSrc] = useState(file);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e)=>setSrc(e.target.result);
    reader.readAsDataURL(file);
  });

  return (
    <img className='img' src={src} alt="текст"></img>
  );
};


export default IMG;
