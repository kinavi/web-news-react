import {createContext} from 'react';
const ModalState = {
  Show: true,
  Hidde: false,
};
const PageContext = createContext();
const ModalContext = createContext(ModalState.Hidde);
export {PageContext, ModalContext};
