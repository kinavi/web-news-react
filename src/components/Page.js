import React, {useState} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';

import {Header, Home, SubHeader} from './header';
import {Menu} from './header/menu';
import Search from './header/search';
import {Footer} from './footer';
import {Filter} from './header/filter';

import './Page.css';
import './header/animation/slide.css';

const Page = ({children}) =>{
  const [isMenu, setMenu] = useState(false);
  const [isVisibleSubMenu, setVisibleSubMenu] = useState(false);
  const [isVisibleSubFilter, setVisibleSubFilter] = useState(false);

  const handlerClickMenu = () =>{
    setVisibleSubMenu(!isVisibleSubMenu);
    setMenu(true);
    if (!isVisibleSubMenu&&isVisibleSubFilter) {
      setVisibleSubFilter(false);
    }
  };

  const handlerClickFilter = () =>{
    setVisibleSubFilter(!isVisibleSubFilter);
    setMenu(false);
    if (!isVisibleSubFilter&&isVisibleSubMenu) {
      setVisibleSubMenu(false);
    }
  };

  return (
    <div className="page">
      <Header>
        <Menu visible={isVisibleSubMenu} onClick={handlerClickMenu} />
        <Home/>
        {/* <Title isSearch={isVisibleSearch}/> */}
        <Search/>
        <Filter onClick={handlerClickFilter}/>
      </Header>
      <CSSTransition
        in={isVisibleSubMenu||isVisibleSubFilter}
        unmountOnExit
        timeout={300}
        classNames='slide' >
        <SubHeader isMenu={isMenu}/>
      </CSSTransition>
      <div className="container-news">
        {children}
      </div>
      <Footer/>
    </div>
  );
};
const mapStateToProps = (state) =>({
  isAuth: state.Auth.isAuth,
});
const mapDispatchToProps = (dispatch) =>({

});

export default connect( mapStateToProps, mapDispatchToProps)(Page);
