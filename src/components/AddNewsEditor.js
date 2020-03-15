import React, {useState} from 'react';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

const EditNewsEditor = ({isEdit, value, setValue}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [isLoad, setLoad] = useState(false);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const _onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const _onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const _onCodeClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'));
  };

  const _onStrikethroughClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
  };

  const _onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const _onChange = (editorState)=>{
    setValue(convertToRaw(editorState.getCurrentContent()));
    setEditorState(editorState);
  };

  return (
    <div className="add-form__editor editor">
      <div className="editor__tools" role="group">
        <button
          type="button"
          className="btn"
          onClick={_onBoldClick}>Bold</button>
        <button
          type="button"
          className="btn"
          onClick={_onItalicClick}>Italic</button>
        <button
          type="button"
          className="btn"
          onClick={_onCodeClick}>Code</button>
        <button
          type="button"
          className="btn"
          onClick={_onStrikethroughClick}>Strikethrough</button>
        <button
          type="button"
          className="btn"
          onClick={_onUnderlineClick}>Underline</button>
      </div>
      <Editor
        editorState={editorState}
        onChange={_onChange}
        handleKeyCommand={handleKeyCommand}
        placeholder="Здесь можно печатать..."
      />
    </div>
  );
};
export default EditNewsEditor;
