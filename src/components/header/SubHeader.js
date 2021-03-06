import React from 'react';
import {Link} from 'react-router-dom';
import {SwitchTransition, CSSTransition} from 'react-transition-group';

import {SubMenu} from './menu';
import {SubFilter} from './filter';

import './animation/fade.css';

const FadeTransition = (props) => {
  return (
    <CSSTransition {...props} classNames="fade">
      {props.children}
    </CSSTransition>
  );
};

export const SubHeader = ({isMenu}) =>{
  return (
    <SwitchTransition mode='out-in'>
      <FadeTransition key={isMenu} timeout={200}>
        {
            isMenu?
            <SubMenu visible={isMenu}>
              <Link
                to='/#About'
                title='About'
                className='sub-menu__link' >ABOUT THE SITE</Link>
              <Link
                to='/#About'
                title='About'
                className='sub-menu__link' >VACANCIES</Link>
              <Link
                to='/#About'
                title='About'
                className='sub-menu__link' >CONTACTS</Link>
              <Link
                to='/#About'
                title='About'
                className='sub-menu__link' >REGULATIONS</Link>
              <Link
                to='/#About'
                title='About'
                className='sub-menu__link' >HELP</Link>
            </SubMenu>:
            <SubFilter/>
        }
      </FadeTransition>
    </SwitchTransition>
  );
};
