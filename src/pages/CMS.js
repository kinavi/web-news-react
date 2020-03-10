import React from 'react';
import {Page, ListNewsCms} from '../components';
import {useHistory, useLocation} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {Button} from 'react-bootstrap';

const Cms = ({route}) =>{
  const history = useHistory();
  const location = useLocation();

  const handlerClick = (e) =>{
    e.stopPropagation();
    console.log('location.pathname - ', location.pathname);
    if (location.pathname=='/cms/add') {
      history.push('/cms');
    } else {
      history.push('/cms/add');
    }
  };

  return (
    <Page>
      <Button
        size="sm"
        className="mb-4"
        onClick={handlerClick}>Добавить новость</Button>
      {renderRoutes(route.routes)}
      <ListNewsCms/>
    </Page>

  );
};

export default {
  component: Cms,
};
