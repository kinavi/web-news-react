import React, {useState, useEffect, } from "react";
import { connect } from 'react-redux'
import { Link, useHistory,useParams, useLocation } from 'react-router-dom'
import { Button } from "react-bootstrap";
//import { connect } from 'react-redux'

import { addNews, loadFile, editNews } from '../../store/Actions/index'
import {TitleField, ButtonSelectImg} from '../FormElements'
import EditNewsEditor from '../EditNewsEditor'
import IMG from '../IMG'

const EditNewsForm = ({id, title, description, _onChangeNews })=>{

    const [Title, setTitle] = useState(title)
    console.log('title - ', title)
    const [Description, setDescription] = useState(description)
    console.log('title - ', description)
    const [File, setFile] = useState()

    let history = useHistory();

    function handleClickChangeBtn() {
        _onChangeNews(id, Title, Description, File)
        history.push("/cms");
    }

    function handleClickBackBtn(){
        history.push("/cms");
    }
    // console.log(id)
    return(
        <div style={{background:"#FFE3B3"}} className=" shadow rounded mt-2 p-2 mb-4">

            <ButtonSelectImg  value={File} setValue={setFile}/>
            <TitleField value={Title} setValue={setTitle}/>
            <EditNewsEditor isEdit={true} value={Description} setValue={setDescription} />
            
            <div>
                <Button onClick={()=>{}}>Предосмотр</Button> 
                <Button onClick={handleClickChangeBtn}>Изменить</Button> 
                <Button onClick={handleClickBackBtn}>Отмена</Button> 
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    ListNews:state.ListNews
})

const mapDispatchToProps = dispatch =>({
    _onChangeNews(id, title, description, file){
        dispatch(editNews(id, title, description, file.name))
        
        //Колхоз, надо в отдельную функцию
        var data = new FormData()
        data.append('file', file)
        data.append('user', 'hubot')

        loadFile(data)
        
    }
})

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(EditNewsForm)

//export default EditNewsForm

