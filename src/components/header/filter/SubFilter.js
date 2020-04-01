import React, {useState, useContext} from 'react';
import Select from './Select';
import {author} from '../../../../data/dataFilter';
export const SubFilter = () =>{
  const style = {
    background: '#181a19',
    height: '100px',
    wight: '100%',
    outline: '2px solid #333333',
    marginTop: '2px',
    display: 'flex',
  };
    // const {modalState, setStateModal} = useContext(ModalContext);
  return (
    <div style={style}>
      <Select title='Author' values={author}/>
    </div>
  );
};
