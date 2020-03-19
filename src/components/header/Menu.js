import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';

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

export const Menu = () =>{
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
