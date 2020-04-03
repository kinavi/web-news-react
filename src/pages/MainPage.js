import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Page from '../components/Page';
import {ListNewsMain} from '../components/news';

import {
  getPartNews,
  droppingViewListAC,
} from '../store/redusers/ViewRedusers';

import '../styles/News.css';

const MainPage = ({News, isLeft, loadNews, droppingViewList}) =>{

  useEffect(()=>{
    droppingViewList();
  }, []);

  const handlerShowMoreClick = () =>{
    loadNews(News.length, 6);
  };
  return (
    <Page>
      <ListNewsMain value={News}/>
      {isLeft&&<button
        className='btn btn-show-more'
        onClick={handlerShowMoreClick}>show more</button>}
    </Page>
  );
};

const mapStateToProps = (state) =>({
  News: state.View.news,
  isLeft: state.View.isLeft,
});
const mapDispatchToProps = (dispatch) =>({
  droppingViewList() {
    dispatch(droppingViewListAC());
  },
  loadNews(length, size) {
    dispatch(getPartNews(length, size));
  },
});


export default {
  component: connect(
      mapStateToProps,
      mapDispatchToProps,
  )(MainPage),
};
