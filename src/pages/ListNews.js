import React from 'react';

import {loadDataAll} from '../store/Actions';

import {ListNewsMain, Page} from '../components';

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
