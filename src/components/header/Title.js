import React, {useContext, useRef} from 'react';
import {Login} from '../forms';
import {ModalContext} from '../context';
import {CSSTransition} from 'react-transition-group';

import './Title.css';

const LayerSearch = ({}) =>{
  const inputSearch = useRef(null);
  const style = {
    background: '#181a19',
    width: '100%',
    height: '100%',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    outline: '2px solid #333333',

    position: 'absolute',
    top: '0',
    left: '0',
  };
  return (
    <div style={style}>
      <div className='search__group'>
        <div className='search__label'>Search</div>
        <input ref={inputSearch} className='search__input'/>
      </div>
    </div>
  );
};
const HeaderTitle = ({value='world web news'}) => <div>{value}</div>

export const Title = ({isSearch}) =>{

  return (
    <div className='header__title'>
      {/* <CSSTransitionGroup
        transitionName="title"
        transitionLeaveTimeout={100}
        transitionEnterTimeout={500}>
        {isSearch&&<HeaderTitle/>}
      </CSSTransitionGroup>
      <CSSTransitionGroup
        transitionName="search"
        transitionEnter = { true }
        transitionLeave = { true }
        transitionLeaveTimeout={100}
        transitionEnterTimeout={500}>
        {isSearch||<LayerSearch/>}
      </CSSTransitionGroup> */}
    </div>
  );
};
