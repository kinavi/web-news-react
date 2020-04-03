import React, {useState, useContext, useEffect} from 'react';
import {Select} from './Select';
import {connect} from 'react-redux';
import {IconContext} from 'react-icons';
import { MdRefresh } from "react-icons/md";
// MdRefresh
import {getNewsByAuthor, droppingViewListAC} from '../../../store/redusers/ViewRedusers';

import {
  getAuthors,
  setAuthorAC,
  droppingFilterAC,
} from '../../../store/redusers/FilterRedusers';

import './Filter.css';
// import {author} from '../../../../data/dataFilter';
const SubFilter = ({
  authors,
  sortNewsByAuthor,
  loadListAuthors,
  setAuthor,
  currentAuthor,
  droppingFilter,
}) =>{
  useEffect(()=>{
    loadListAuthors();
  }, []);

  const handlerClickDropping = () => {
    droppingFilter();
  };

  const style = {
    background: '#181a19',
    height: '100px',
    wight: '100%',
    outline: '2px solid #333333',
    marginTop: '2px',
    display: 'flex',
    // overflow: 'unset',
  };
    // const {modalState, setStateModal} = useContext(ModalContext);
  return (
    <div style={style}>
      <div className='container-filter' >
        <Select
          title='Author'
          values={authors}
          onSelect={sortNewsByAuthor}
          option={currentAuthor}
          setOption={setAuthor}
        />
      </div>
      <button className='header__btn btn-dropping' onClick={handlerClickDropping}>
        <IconContext.Provider
          value={{size: 30, className: 'header__icon'}}>
          <MdRefresh/>
        </IconContext.Provider>
      </button>
    </div>
  );
};

const mapStateToProps = (state) =>({
  authors: state.Filter.authors,
  currentAuthor: state.Filter.currentAuthor,
});
const mapDispatchToProps = (dispatch) =>({
  sortNewsByAuthor(author) {
    dispatch(getNewsByAuthor(author));
  },
  loadListAuthors() {
    dispatch(getAuthors());
  },
  setAuthor(author) {
    dispatch(setAuthorAC(author));
  },
  droppingFilter() {
    dispatch(setAuthorAC('all'));
    dispatch(droppingViewListAC());
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubFilter);
