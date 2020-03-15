import React from 'react';
import {Page, ListNewsCms} from '../components';
import {useHistory, useLocation} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {Button as button} from 'react-bootstrap';
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

export default {
  component: Cms,
};
