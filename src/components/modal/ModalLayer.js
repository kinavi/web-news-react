import React from 'react';

export const ModalLayer = (e) =>{
  const modal = useContext(ModalContext);
  const handlerClick =(e) =>{
    setStateModal(false);
    e.stopPropagation();
  };
  return (
    modal&&<div className='modal-bg' onClick={handlerClick}></div>
  );
};
