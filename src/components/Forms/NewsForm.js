import React, {useState, useEffect} from "react";
import { connect } from 'react-redux'
import { Link, useHistory,useParams } from 'react-router-dom'
import { Button } from "react-bootstrap";

import { addNews, loadFile } from '../../store/Actions/index'
import {TitleField, ButtonSelectImg} from '../FormElements'
import MyEditor from '../MyEditor'

const NewsForm = ({News, _onCreateNews })=>{

    const [Title, setTitle] = useState(News.title)
    const [Description, setDescription] = useState(News.description)
    const [File, setFile] = useState()

    // useEffect(()=>{
    //     console.log("+")
    //     if(News!==undefined){
    //         setTitle();
    //         setDescription();
    //         console.log("++")
    //         console.log(News.description)
    //     }
    //     // if(News.title!==undefined){
    //     //     //console.log(title)
    //     //     setTitle(News.title);
    //     // }
    //     // if(News.description!==undefined){
    //     //     //console.log(description)
    //     //     setDescription(News.description); fileName={News.fileName}
    //     // }
    // }, [News])

    let history = useHistory();

    function handleClick() {
        _onCreateNews(Title, Description, File)
        history.push("/cms");
    }
    // console.log(id)
    return(
        <div style={{background:"#FFE3B3"}} className=" shadow rounded mt-2 p-2 mb-4">

            <ButtonSelectImg  value={File} setValue={setFile}/>

            <TitleField value={Title} setValue={setTitle}/>
            <MyEditor isEdit={true} value={Description} setValue={setDescription} />
            <div>
                <Button onClick={()=>{}}>Предосмотр</Button> 
                <Button onClick={handleClick}>Создать</Button> 
                
                <Link className="btn" to="/cms">Отмена</Link>
            </div>
        </div>
    )
}

export default NewsForm

