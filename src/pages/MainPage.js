import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadNewsByDate, loadPartNews} from '../store/fetchs/preload';

import {ListNewsMain} from '../components/news';
import Page from '../components/Page';

import {getPartNews, clearViewListAC, droppingViewListAC} from '../store/redusers/ViewRedusers';

import '../styles/News.css';

const MainPage = ({News, isLeft, loadNews, droppingViewList}) =>{
  useEffect(()=>{
    droppingViewList();
    // clearView();
    // loadNews(0, 6);
  }, []);

  const handlerShowMoreClick = () =>{
    loadNews(News.length, 6);
  };
  return (
    <Page>
      <ListNewsMain value={News}/>
      {isLeft&&<button className='btn btn-show-more' onClick={handlerShowMoreClick}>show more</button>}
    </Page>
  );
};

const mapStateToProps = (state) =>({
  News: state.View.news,
  isLeft: state.View.isLeft,
  // Length: state.View.length,
});
const mapDispatchToProps = (dispatch) =>({
  droppingViewList() {
    dispatch(droppingViewListAC());
  },
  loadNews(length, size) {
    dispatch(getPartNews(length, size));
  },
  // clearView() {
  //   dispatch(clearViewListAC());
  // },
  // sortNewsByAuthor(author) {
  //   dispatch(getNewsByAuthor(author));
  // },
  // loadListAuthor() {
  //   dispatch(getAuthor());
  // },
});


export default {
  component: connect(
      mapStateToProps,
      mapDispatchToProps,
  )(MainPage),
  // loadNews,
  // loadDataByDate,
};
