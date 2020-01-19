import React,  { useState,useEffect} from "react";
import {Editor, EditorState, RichUtils, CompositeDecorator, ContentState, convertToRaw, convertFromRaw} from 'draft-js';
import useBeforeFirstRender from './Hooks/useBeforeFirstRender'

const MyEditor = ({isEdit, value, setValue }) => {

    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(value)))

    // const handleKeyCommand = (command, editorState) => {
    //     const newState = RichUtils.handleKeyCommand(editorState, command);
    //     if (newState) {
    //         setEditorState(newState);
    //       return 'handled';
    //     }
    //     return 'not-handled';
    // }

    // const _onBoldClick = () => {
    //     setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    // }

    // const _onItalicClick = () => {
    //     setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    // }

    // const _onCodeClick = () => {
    //     setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'));
    // }

    // const _onStrikethroughClick = () => {
    //     setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
    // }

    // const _onUnderlineClick = () => {
    //     setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    // }

    // const _onChange = editorState=>{
    //     setValue(convertToRaw(editorState.getCurrentContent()))
    //     setEditorState(editorState)
    // }

    return (
        <div style={{background:"#e3edef"}} className="rounded p-2">       
                <Editor
                    editorState={editorState}
                    readOnly={true}
                />
        </div>
    )
}
export default MyEditor
