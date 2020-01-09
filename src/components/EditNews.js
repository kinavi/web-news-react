import React, {useState, useEffect} from "react";
import { connect } from 'react-redux'
import { Button } from "react-bootstrap";
import { removeNews } from '../store/Actions'
// import { convertToHTML, convertFromHTML } from 'draft-convert'

// import {Editor, EditorState, RichUtils, CompositeDecorator, ContentState, convertFromRaw} from 'draft-js';

const EditNews = ({id, title, description, onRemove, onEdit}) =>{

    return(
        <div  className="shadow mb-2">
            
            <div style={{background:"#af9b79"}} className="d-flex rounded" >
                <div className="align-self-center ml-2 rounded text-white flex-fill">{title}</div>
                {/* <Button className="m-2" disabled={!isChange} variant="success" onClick={(e)=>{e.stopPropagation(); onEdit(id, titleFeild, convertToHTML(editorState.getCurrentContent())); setChange(!isChange) }}>Сохранить</Button> */}
                <Button onClick={() => onRemove(id)} variant="danger" size="sm" className="m-2">Удалить</Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    // onEdit(id, title, description){
    //     dispatch(editNews(id, title, description))
    // },
    onRemove(id){
        dispatch(removeNews(id))
    }

})

export default connect(
    null,
    mapDispatchToProps
)(EditNews)
