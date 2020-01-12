import React,  { Component,useState,useEffect} from "react";
import {Editor, EditorState, RichUtils, CompositeDecorator, ContentState, convertToRaw, convertFromRaw} from 'draft-js';
import useBeforeFirstRender from './Hooks/useBeforeFirstRender'

const MyEditor = ({ value, setValue }) => {

    const [editorState, setEditorState] = useState( EditorState.createEmpty())

    const fromRaw = (editorState, raw) => {
        return EditorState.push(editorState, convertFromRaw(raw), 'update-state');
      };

    useBeforeFirstRender(()=>{
        if(value!==undefined) fromRaw(editorState, value)
    })

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

    const _onChange = editorState=>{
        setValue(convertToRaw(editorState.getCurrentContent()))
        setEditorState(editorState)
    }

    return (
        <div style={{background:"#e3edef"}} className="rounded p-2">       
            <div className="btn-group btn-group-sm" role="group">
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={_onBoldClick}>Bold</button>
                        <button type="button" className="btn btn-secondary" onClick={_onItalicClick}>Italic</button>
                        <button type="button" className="btn btn-secondary" onClick={_onCodeClick}>Code</button>
                        <button type="button" className="btn btn-secondary" onClick={_onStrikethroughClick}>Strikethrough</button>
                        <button type="button" className="btn btn-secondary" onClick={_onUnderlineClick}>Underline</button>
                    </div>
            </div>
                <Editor
                    editorState={editorState}
                    onChange={_onChange}
                    handleKeyCommand={handleKeyCommand}
                    placeholder="Здесь можно печатать..."
                />
        </div>
    )
}
export default MyEditor
