import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IconContext} from 'react-icons';
import {GoSearch} from 'react-icons/go';
import '../styles/Header.css';
import {MdClose} from 'react-icons/md';
import {Link, useHistory} from 'react-router-dom';
import {TiHome} from 'react-icons/ti';
// import {Menu} from './Menu';

const CloseState = () =>
  <IconContext.Provider
    value={{size: 30, className: 'header__icon'}}>
    <GiHamburgerMenu/>
  </IconContext.Provider>;

const OpenState = () =>
  <IconContext.Provider
    value={{size: 30, className: 'header__icon'}}>
    <MdClose/>
  </IconContext.Provider>;

const Menu = () =>{
  const [isOpen, setOpen] = useState(false);
  // const history = useHistory();
  const handlerMouseOn = (e) =>{
    e.stopPropagation();
    setOpen(true);
  };
  // const handlerMouseOff = (e) =>{
  //   e.stopPropagation();
  //   setOpen(false);
  // };      onMouseLeave={handlerMouseOff}

  return (
    <button
      className='header__menu header__btn'

      onMouseEnter={handlerMouseOn}>
      {isOpen?<OpenState/>:<CloseState/>
      }
      {isOpen&&
      <div className="submenu">
        <Link to='/' title='main' className='header__link'>Main</Link>
        <Link to='/cms' title='cms' className='header__link'>CMS</Link>
      </div>
      }
    </button>
  );
};

const Title = () =>{
  // const handlerClick = (e)=>{
  //   e.stopPropagation();

  // }
  return (
    <div className='header__title'>
      <span className='text-center'>
        world web news
      </span>
    </div>
  );
};

const Home = () =>{
  return (
    <Link to='/' title='main' className='header__home header__btn'>
      <IconContext.Provider
        value={{size: 30, className: 'header__icon'}}>
        <TiHome/>
      </IconContext.Provider>
    </Link>
  );
};

const Auth = () =>{
  return (
    <Link to='/cms' title='main' className='header__auth header__btn'>
      <span className='text-center'>
        AUTH
      </span>
    </Link>
  );
};
const Search = () =>{
  return (
    <button className='header__btn header__search'>
      <IconContext.Provider value={{size: 30, className: 'header__icon'}}>
        <GoSearch/>
      </IconContext.Provider>

    </button>
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
  </div>;
