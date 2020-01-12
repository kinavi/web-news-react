import React, {useState} from 'react'

import { IoIosArrowDropleft } from "react-icons/io";
import IMG from './IMG'

export const Title = ({value = "", setValue}) =>
        <div className="form-group">
            <label className="exampleInputPassword1">Заголовок</label>
            <input  style={{background:"#e3edef"}}  className="form-control" onChange={(e)=>setValue(e.target.value)} value = {value}/>
        </div> 

export const ButtonSelectImg = () =>{

    const [file, setFile] = useState();
    const [refFileInp, setRefFileInp] = useState();

    return(
        <div>
            <input ref={node=>setRefFileInp(node)} style={{display:"none"}} type="file" name="filedata" onChange={(e)=>setFile(e.target.files[0])}/>
            <div className="form-group">
                <label className="exampleInputPassword1">Картинка</label>
                    <div>
                        {!!file?<IMG file={file}/>:<div></div>}
                    </div> 
                    <button onClick={()=>refFileInp.click()}>Выберите картинку</button>
            </div>
        </div>
    )

}