import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import Page from '../components/Page';
import {ListNewsCms} from '../components/list';

import {loadDataAll} from '../store/Actions';

import '../styles/Cms.css';

const Cms = ({route}) =>{
  const history = useHistory();
  const location = useLocation();

  const handlerClick = (e) =>{
    e.stopPropagation();
    console.log('location.pathname - ', location.pathname);
    if (location.pathname=='/cms/add/') {
      history.push('/cms');
    } else {
      history.push('/cms/add/');
    }
  };

  return (
    <Page>
      <div className='cms'>
        <button
          className="btn cms__btn"
          onClick={handlerClick}>Add News</button>
        {renderRoutes(route.routes)}
        <ListNewsCms/>
      </div>

    </Page>

  );
};
const loadData = (store) => {
  return store.dispatch(loadDataAll());
};
export default {
  component: Cms,
  loadData,
};
