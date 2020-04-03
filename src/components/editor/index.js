import React, {useState, useEffect} from 'react';

import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';

const CustomeEditor = ({isEdit, value, setValue}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(()=>{
    if (value) {
      setEditorState(
          EditorState.createWithContent(
              convertFromRaw({...value, entityMap: {}}), 
              // Баг с редактором, ошибка без entityMap: {}. Понять и исправить
          ),
      );
    }
  }, []);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const handlerBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handlerItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const handlerCodeClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'));
  };

  const handlerStrikethroughClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
  };

  const handlerUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const handlerChange = (editorState)=>{
    setValue(convertToRaw(editorState.getCurrentContent()));
    setEditorState(editorState);
  };

  return (
    <div className={`editor ${isEdit||'editor_view'}`}>
      {
        isEdit&&<div className="editor__tools" role="group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlerBoldClick}>Bold</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlerItalicClick}>Italic</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlerCodeClick}>Code</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlerStrikethroughClick}>Strikethrough</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlerUnderlineClick}>Underline</button>
        </div>
      }
      <Editor
        readOnly={!isEdit}
        editorState={editorState}
        onChange={handlerChange}
        handleKeyCommand={handleKeyCommand}
        placeholder="Здесь можно печатать..."
      />
    </div>
  );
};


export {
  CustomeEditor,
};
