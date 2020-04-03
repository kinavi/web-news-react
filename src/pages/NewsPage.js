import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {News} from '../components/news';
import Page from '../components/Page';
import {loadNewsByDate} from '../store/fetchs/preload';

import '../styles/News.css';

const NewsPage = ({Item}) =>{
  const {id} = useParams();

  const [news, setNews] = useState(getItemById(Item, id));

  return (
    <Page>
      <News {...news}/>
    </Page>
  );
};
const mapStateToProps = (state) =>({
  Item: state.View.news,
});
const loadDataByDate = (store) => {
  return store.dispatch(loadNewsByDate());
};
export default {
  component: connect(
      mapStateToProps,
      null,
  )(NewsPage),
  // loadDataByDate,
};

// Фигня, надо переделать
const getItemById = (list, id) =>{
  return list.find((item) => item._id==id);
};
