import React from 'react';

import {loadNewsByDate} from '../store/fetchs/preload';

import {ListNewsMain} from '../components/news';
import Page from '../components/Page';

import '../styles/News.css';

const MainPage = () =>{
  return (
    <Page>
      <ListNewsMain/>
    </Page>
  );
};

const loadDataByDate = (store) => {
  return store.dispatch(loadNewsByDate());
};


export default {
  component: MainPage,
  loadDataByDate,
};
