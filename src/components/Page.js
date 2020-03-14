import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IconContext} from 'react-icons';
import {GoSearch} from 'react-icons/go';
import '../styles/Header.css';

// import {Menu} from './Menu';

const Menu = () =>{
  return (
    <div className='header__menu'>
      <IconContext.Provider value={{size: 30, color: '#FFFFFF', className: 'text-center'}}>
        <GiHamburgerMenu/>
      </IconContext.Provider>

    </div>
  );
};

const Title = () =>{
  return (
    <div className='header__title'>
      <span className='text-center'>
        TITLE
      </span>
    </div>
  );
};

const Club = () =>{
  return (
    <div className='header__club'>
      <span className='text-center'>
      CLUB
      </span>

    </div>
  );
};

const Auth = () =>{
  return (
    <div className='header__auth'>
      <span className='text-center'>
      AUTH
      </span>

    </div>
  );
};
const Search = () =>{
  return (
    <div className='header__search'>
      <IconContext.Provider value={{size: 30, color: '#FFFFFF', className: 'text-center'}}>
        <GoSearch/>
      </IconContext.Provider>

    </div>
  );
};

const Header = ({children})=>{
  return (
    <div className='header'>
      {children}
    </div>
  );
};


const Footer = () =>{
  return (
    <div>
      Footer
    </div>
  );
};

export const Page = ({children}) =>
  <div className="page">

    <Header>
      <Menu/>
      <Club/>
      <Title/>
      <Auth/>
      <Search/>
    </Header>
    <div className="container-news">
      {children}
    </div>
    <Footer>

    </Footer>
  </div>;
