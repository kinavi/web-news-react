import React, {useState} from "react";
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Button } from "react-bootstrap";


import { addNews, loadFile } from '../../store/Actions/index'
import {TitleField, ButtonSelectImg} from '../FormElements'
import MyEditor from '../MyEditor'

const AddNewForm = ({ _onCreateNews })=>{

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState();

    let history = useHistory();

    function handleClickCreateBtn() {
        _onCreateNews(title, description,file)
        history.push("/cms");
      
    }

    return(
        <div style={{background:"#FFE3B3"}} className=" shadow rounded mt-2 p-2 mb-4">
            <TitleField value={title} setValue={setTitle}/>
            <MyEditor value={description} setValue={setDescription} />
            <ButtonSelectImg value={file} setValue={setFile}/>
            <div>
                <Button onClick={()=>{}}>Предосмотр</Button> 
                <Button onClick={handleClickCreateBtn}>Создать</Button> 
                <Link className="btn" to="/cms">Отмена</Link>
            </div>
            
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    _onCreateNews(title, description, file){
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
)(AddNewForm)


