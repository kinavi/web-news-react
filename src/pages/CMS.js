import React from 'react';
import {useHistory, useLocation, Redirect} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {connect} from 'react-redux';

import Page from '../components/Page';
import {ListNewsCms} from '../components/list';

import {loadDataAll} from '../store/Actions';

import '../styles/Cms.css';

const CmsPage = ({isAuth, route}) =>{
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
      {isAuth?<div className='cms'>
        <button
          className="btn cms__btn"
          onClick={handlerClick}>Add News</button>
        {renderRoutes(route.routes)}
        <ListNewsCms/>
      </div>:
      <Redirect push='/'/>
      }
    </Page>

  );
};
const mapStateToProps = (state) =>({
  ...state.Auth,
});

const loadData = (store) => {
  return store.dispatch(loadDataAll());
};
export default {
  component: connect( mapStateToProps, null) (CmsPage),
  loadData,
};