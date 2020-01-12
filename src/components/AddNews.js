import React, {useState} from "react";
import { connect } from 'react-redux'
import { addNews, loadFile } from '../store/Actions/index'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
//import { LoadFile } from '../../test/loadFile'

import {Title, ButtonSelectImg} from './FormElements'
import MyEditor from './MyEditor'
// import {Editor, EditorState, RichUtils, CompositeDecorator, ContentState} from 'draft-js';

const AddNewLayer = ({ onAdd })=>{

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    return(
        <div style={{background:"#FFE3B3"}} className=" shadow rounded mt-2 p-2 mb-4">
            <Title value={title} setValue={setTitle}/>
            <MyEditor value={description} setValue={setDescription} />
            <ButtonSelectImg/>
            <div>
                <button onClick={()=>{}}>Предосмотр</button> 
                <button onClick={()=>{}}>Создать</button> 
                <button onClick={()=>setHideAddLayer(true)}>Отмена</button>
            </div>
        </div>
    )//onAdd(titleInput.value,  convertToHTML(editorState.getCurrentContent()), file); console.log(file)
}
const mapDispatchToProps = dispatch =>({
    onAdd(title, description, file){
        dispatch(addNews(title, description, file.name))

        //Колхоз, надо в отдельную функцию
        var data = new FormData()
        data.append('file', file)
        data.append('user', 'hubot')

        loadFile(data)
    }
})

export default connect(
    null,
    mapDispatchToProps
)(AddNewLayer)


