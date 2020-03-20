import React, {useState} from 'react';
import {Auth, Header, Home, Menu, Search, Title} from './header';
import {Footer} from './footer';

import {ModalContext} from './context';

// import '../styles/App.css';
import '../styles/Header.css';
import '../styles/Login.css';


export const Page = ({children}) =>{
  const [modalState, setStateModal] = useState(false);

  return (
    <ModalContext.Provider value={{modalState, setStateModal}}>
      <div className="page">
        {/* <ModalLayer/> */}
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
          Footer
        </Footer>
      </div>
    </ModalContext.Provider>
  );
};

