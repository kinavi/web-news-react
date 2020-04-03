import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {News} from '../components/news';
import Page from '../components/Page';

import {getNewsById} from '../store/redusers/NewsRedusers';

import '../styles/News.css';

const NewsPage = ({news, getNews}) =>{
  const {id} = useParams();

  useEffect(()=>{
    if (id) {
      getNews(id);
    }
  }, []);

  return (
    <Page>
      {news?<News {...news}/>:<div>no</div>}
    </Page>
  );
};
const mapStateToProps = (state) =>({
  news: state.News,
});
const mapDispatchToProps = (dispatch) =>({
  getNews(newsId) {
    dispatch(getNewsById(newsId));
  },
});
export default {
  component: connect(
      mapStateToProps,
      mapDispatchToProps,
  )(NewsPage),
};