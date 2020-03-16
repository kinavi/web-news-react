import React, {useState, useEffect} from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  CompositeDecorator,
  ContentState,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';

export const EditorPreview = ({isEdit, value, setValue}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(()=>{
    setEditorState(EditorState.createWithContent(convertFromRaw(value)));
  }, [value]);

  return (
    <div className="news__content">
      <Editor
        editorState={editorState}
        readOnly={isEdit}
      />
    </div>
  );
};
//  default PreviewEditor;
