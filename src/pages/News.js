import React, {useState, useEffect} from 'react';
import {Page} from '../components/Page';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import FullNews from '../components/FullNews';
import {loadDataAll} from '../store/Actions';

const News = ({News}) =>{
  const {id} = useParams();
  // console.log('id - ', id)
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
