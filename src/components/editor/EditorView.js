import React, {useState, useEffect} from 'react';
import {
  Editor,
  EditorState,
  convertFromRaw,
} from 'draft-js';

export const EditorView = ({isEdit, value, setValue}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(()=>{
    setEditorState(
        EditorState.createWithContent(
            convertFromRaw({...value, entityMap: {}}),
        ),
    ); // Костыль
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
