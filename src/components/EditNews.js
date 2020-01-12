import React, {useState, useEffect} from "react";
import { connect } from 'react-redux'
import { Button } from "react-bootstrap";
import { removeNews } from '../store/Actions'
 import { convertToHTML, convertFromHTML } from 'draft-convert'

 import {Editor, EditorState, RichUtils, CompositeDecorator, ContentState, convertFromRaw} from 'draft-js';

//import stateFromHTML from '../stateFromHTML'

const EditNews = ({id, title, description, onRemove, onEdit}) =>{


    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(description)) )

    //if(description!==undefined){ setEditorState(EditorState.push(convertFromHTML(description)) } 
    
    //EditorState.createWithContent(state)| EditorState.createEmpty() | EditorState.createWithContent(convertFromHTML(description)) 
    const [isHide,setHide] = useState(true)
    const [isChange, setChange] = useState(false)

    const [titleFeild, setTitleFeild] = useState(title);


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
        <div  className="shadow mb-2">
            
            <div style={{background:"#af9b79"}} className="d-flex rounded" onMouseDown={(e)=>{setHide(!isHide)}}>
                <div className="align-self-center ml-2 rounded text-white flex-fill">{title}</div>
                {/* <Button className="m-2" disabled={!isChange} variant="success" onClick={(e)=>{e.stopPropagation(); onEdit(id, titleFeild, convertToHTML(editorState.getCurrentContent())); setChange(!isChange) }}>Сохранить</Button> */}
                <Button onClick={() => onRemove(id)} variant="danger" size="sm" className="m-2">Удалить</Button>
            </div>
            {isHide?
            <div></div>
            :
            <div className="p-2 rounded-bottom" style={{background: "#FFE3B3"}} >
                 <div className="form-group">
                    <label className="exampleInputPassword1">Заголовок</label>
                    <input style={{background:"#e3edef"}}  onChange={(e)=>{setTitleFeild(e.target.value); setChange(true)}} value={titleFeild} type="text" className="form-control"/>
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
                    {/*convertToEditorState(description) <MainDraftEditor description={description}/> */}
                    {/* <textarea onChange={(e)=>{setDescriptionFeild(e.target.value);setChange(true)}} value={descriptionFeild} className="form-control" rows="10"></textarea> */}
                </div>
            </div>
            }
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    onEdit(id, title, description){
        dispatch(editNews(id, title, description))
    },
    onRemove(id){
        dispatch(removeNews(id))
    }

})

export default connect(
    null,
    mapDispatchToProps
)(EditNews)
