import React, {useState, useRef} from 'react';

import {connect} from 'react-redux';

import {SearchButton} from './SearchButton';

import './Search.css';

import {searchByTitle, droppingViewListAC} from '../../../store/redusers/ViewRedusers';

import {IconContext} from 'react-icons';
import {GoSearch} from 'react-icons/go';
import {MdClose} from 'react-icons/md';

const Search = ({title='world web news', searchByTitle, droppingViewList}) =>{
  const [visibility, setVisibility] = useState(false);

  const searchInput = useRef();

  const handlerClickOpen = () =>{
    setVisibility(true);
  };
  const handlerClickClose = () =>{
    setVisibility(false);
    droppingViewList();
  };
  const handlerChange = () =>{
    console.log('search - ', searchInput.current.value);
    searchByTitle(searchInput.current.value);
  };

  return (
    <div className='search__container'>
      <div className='search__title'>{title}</div>
      <SearchButton onClick={handlerClickOpen}/>
      {visibility&&<div className='search__layer'>
        <div className='search__icon'>
          <IconContext.Provider value={{color: '#786428', size: 25, className: 'header__icon'}}>
            <GoSearch/>
          </IconContext.Provider>
        </div>
        <input ref={searchInput} className='search__input' type='text' placeholder='site search' onChange={handlerChange} />
        <div className='search__icon'>
          <IconContext.Provider value={{color: '#706F6F', size: 25, className: 'header__icon active'}}>
            <MdClose onClick={handlerClickClose}/>
          </IconContext.Provider>
        </div>
      </div>}
    </div>
  );
};

const mapStateToProps = (state) =>({
  // News: state.View.news,
  // isLeft: state.View.isLeft,
});
const mapDispatchToProps = (dispatch) =>({
  searchByTitle(value) {
    dispatch(searchByTitle(value));
  },
  droppingViewList() {
    dispatch(droppingViewListAC());
  },
  // loadNews(length, size) {
  //   dispatch(getPartNews(length, size));
  // },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);

export {SearchButton};
