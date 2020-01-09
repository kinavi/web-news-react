import React, {useState} from "react";
//import CmsPage from '../../Template/CmsPage'
import { connect } from 'react-redux'
//import { AddNew } from '../../../redux/Actions/List/AddNew'
//import ListNews from '../ListNews/ListNewsPage'
import { withRouter } from 'react-router'
//import { Modal, Button, ButtonToolbar } from 'react-bootstrap'
//import AddNewsLayerModal from './AddNewsLayerModal'
import { addNews, loadFile } from '../store/Actions/index'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
//import { LoadFile } from '../../test/loadFile'
import IMG from './IMG'
import { IoIosArrowDropleft } from "react-icons/io";

import { convertToHTML, convertFromHTML } from 'draft-convert'

import {Editor, EditorState, RichUtils, CompositeDecorator, ContentState} from 'draft-js';

const AddNewLayer = ({onAdd})=>{

    const [isHideAddLayer,setHideAddLayer] = useState(true)

    let titleInput

    const [isChange, setChange] = useState(false)
    //const { onAdd, onHide } = props
    const [file, setFile] = useState();
    const [refFileInp, setRefFileInp] = useState();

    const [editorState, setEditorState] = React.useState( EditorState.createEmpty());

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
          return 'handled';
        }
        return 'not-handled';
    }

    const _onBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }

    const _onItalicClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    }

    const _onCodeClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'));
    }

    const _onStrikethroughClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
    }

    const _onUnderlineClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    }

    
    const middleHandler = message => setEditorState => {
        console.log(message)
        if (!isChange) setChange(true)
        return setEditorState
    }

    return(
        <div className="mb-4">
            <button variant="primary" onClick={() =>setHideAddLayer(!isHideAddLayer)}>  Добавить новость </button>
            {(isHideAddLayer)?<div></div>:
            <div style={{background:"#FFE3B3"}} className=" shadow rounded mt-2 p-2">
                <div className="form-group">
                    <label className="exampleInputPassword1">Заголовок</label>
                    <input  style={{background:"#e3edef"}}  className="form-control" ref={node=>titleInput=node}/>
                </div> 
                <div className="form-group">
                    <label className="exampleInputPassword1">Описание</label><br/>
                    <div className="btn-group btn-group-sm" role="group">
                        <button type="button" class="btn btn-secondary" onClick={_onBoldClick}>Bold</button>
                        <button type="button" class="btn btn-secondary" onClick={_onItalicClick}>Italic</button>
                        <button type="button" class="btn btn-secondary" onClick={_onCodeClick}>Code</button>
                        <button type="button" class="btn btn-secondary" onClick={_onStrikethroughClick}>Strikethrough</button>
                        <button type="button" class="btn btn-secondary" onClick={_onUnderlineClick}>Underline</button>
                    </div>
                    <div style={{background:"#e3edef"}} className="rounded p-2">
                        
                        <Editor
                            editorState={editorState}
                            onChange={middleHandler("+")(setEditorState)}
                            handleKeyCommand={handleKeyCommand}
                            placeholder="Здесь можно печатать..."
                        />
                    </div>
                </div>
                <input ref={node=>setRefFileInp(node)} style={{display:"none"}} type="file" name="filedata" onChange={(event)=>setFile(event.target.files[0])}/>
                <div className="form-group">
                    <label className="exampleInputPassword1">Картинка</label>
                    <div className='d-flex flex-row '>
                        {!!file?<IMG file={file}/>:<div></div>}
                        <button onClick={()=>refFileInp.click()}><IoIosArrowDropleft size="100" /></button>
                    </div>
                </div>
                <div>
                    <button onClick={()=>{onAdd(titleInput.value,  convertToHTML(editorState.getCurrentContent()), file); console.log(file)}}>Создать</button>
                    <button onClick={()=>setHideAddLayer(true)}>Отмена</button>
                </div>
            </div>
            }
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    onAdd(title, description, file){
        //console.log(`onAdd>file:${file}`)
        dispatch(addNews(title, description, file.name))

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


