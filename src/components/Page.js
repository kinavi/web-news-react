import React, {useState} from 'react';
import {Auth, Header, Home, Menu, Search, Title} from './header';
import {Footer} from './footer';
import '../styles/Header.css';
import {ModalContext} from './context';

export const Page = ({children}) =>{
  const [modalState, setStateModal] = useState(false);

  // const handlerModalClick =() =>{
  //   // setModalState(false);
  // };
  return (
    <ModalContext.Provider value={{modalState, setStateModal}}>
      <div className="page">
        {/* <ModalLayer setStateModal={setStateModal}/> */}
        <Header>
          {/* <Menu/> */}
          <Home/>
          <Auth/>
          <Title/>
          <Search/>
        </Header>
        <div className="container-news">
          {children}
        </div>
        <Footer>

        </Footer>
      </div>
    </ModalContext.Provider>
  );
};

