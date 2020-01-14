import React, {useState, useEffect} from "react";
import { connect } from 'react-redux'
import { Link, useHistory,useParams } from 'react-router-dom'
import { Button } from "react-bootstrap";

import { addNews, loadFile } from '../../store/Actions/index'
import {TitleField, ButtonSelectImg} from '../FormElements'
import MyEditor from '../MyEditor'

const NewsForm = ({News, _onCreateNews })=>{

    //console.log(News)
    const [Title, setTitle] = useState()
    const [Description, setDescription] = useState()
    const [File, setFile] = useState()

    useEffect(()=>{
        
        if(News!==undefined){
            setTitle(News.title);
            setDescription(News.description);
            console.log("++")
            console.log(News.description)
        }
        // if(News.title!==undefined){
        //     //console.log(title)
        //     setTitle(News.title);
        // }
        // if(News.description!==undefined){
        //     //console.log(description)
        //     setDescription(News.description);
        // }
    }, [News])

    let history = useHistory();

    function handleClick() {
        _onCreateNews(Title, Description, File)
        history.push("/cms");
    }
    // console.log(id)
    return(
        <div style={{background:"#FFE3B3"}} className=" shadow rounded mt-2 p-2 mb-4">
            {/* <ButtonSelectImg fileName={News.fileName} value={File} setValue={setFile}/> */}
            <TitleField value={Title} setValue={setTitle}/>
            <MyEditor value={Description} setValue={setDescription} />
            <div>
                <Button onClick={()=>{}}>Предосмотр</Button> 
                <Button onClick={handleClick}>Создать</Button> 

                
                <Link className="btn" to="/cms">Отмена</Link>
            </div>
        </div>
    )
}

export default NewsForm

