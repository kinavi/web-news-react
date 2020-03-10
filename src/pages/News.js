import React, {useState, useEffect} from 'react';
import {Page} from '../components/Page';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import FullNews from '../components/FullNews';

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

export default {
  component: connect(
      mapStateToProps,
      null,
  )(News),
};

// Фигня, надо переделать
const getItemById = (list, id) =>{
  return list.find((item) => item.id==id);
};
