import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {FullNews} from '../components/news';
import Page from '../components/Page';
import {loadDataAll} from '../store/Actions';

import '../styles/News.css';

const News = ({News}) =>{
  const {id} = useParams();

  const [news, setNews] = useState(getItemById(News, id));

  return (
    <Page>
      <FullNews {...news}/>
    </Page>
  );
};
const mapStateToProps = (state) =>({
  News: state.News,
});
const loadData = (store) => {
  return store.dispatch(loadDataAll());
};
export default {
  component: connect(
      mapStateToProps,
      null,
  )(News),
  loadData,
};

// Фигня, надо переделать
const getItemById = (list, id) =>{
  return list.find((item) => item._id==id);
};
