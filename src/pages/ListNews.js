import React from 'react';

import {loadDataAll} from '../store/Actions';

import {ListNewsMain} from '../components/list';
import {Page} from '../components/Page';

import '../styles/News.css';

const ListNews = () =>{
  return (
    <Page>
      <ListNewsMain/>
    </Page>
  );
};

const loadData = (store) => {
  return store.dispatch(loadDataAll());
};

export default {
  component: ListNews,
  loadData,
};
