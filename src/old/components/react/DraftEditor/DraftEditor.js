import React, {Component, useState} from 'react';

import {Editor, EditorState, RichUtils, CompositeDecorator} from 'draft-js';
// import { getSelectionRange, getSelectionCoords} from '../../utils/index'
// import {convertToHTML} from 'draft-convert'
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import ReactSpoiler from "react-spoiler";

const MainDraftEditor = ({description}) =>
{

    const blocksFromHTML = convertFromHTML(description);
    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
    );

    const [editorState, setEditorState] = React.useState(
        EditorState.createWithContent(state),
      );

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
    
    return(
        <div>
            <button onClick={_onBoldClick}>Bold</button>
            <button onClick={_onItalicClick}>Italic</button>
            <button onClick={_onCodeClick}>Code</button>
            <button onClick={_onStrikethroughClick}>Strikethrough</button>
            <button onClick={_onUnderlineClick}>Underline</button>
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              placeholder="Здесь можно печатать..."
            />
        </div>
    )
}

export default MainDraftEditor