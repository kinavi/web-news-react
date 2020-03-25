import React from 'react';

import {SubHeader} from './SubHeader';
import {Home} from './Home';

import './Header.css';

const Header = ({children})=>{
  return (
    <div className='header'>
      {children}
    </div>
  );
};

export {Header, SubHeader, Home};
