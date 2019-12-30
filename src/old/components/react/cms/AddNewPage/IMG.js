import React,{ useState, useEffect, Component }  from "react";

const IMG = ({ file }) =>{

    const [src, setSrc] = useState(""); 
    
    useEffect(() => {
      var reader = new FileReader();
      reader.onload = (e)=>setSrc(e.target.result)
      reader.readAsDataURL(file);
      
    });
  
    return (
      <img className='w-25 mr-3' src={src} alt="текст"></img>
    )
}


export default IMG