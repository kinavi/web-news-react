import React, {useEffect, useState} from 'react';
import {useHistory, useLocation, Redirect} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {connect} from 'react-redux';

import Page from '../components/Page';
import {ContainerNews} from '../components/cms/ContainerNews';
import {getNewsById} from '../store/redusers/CmsRedusers';
import {loadNewsByUserId} from '../store/fetchs/preload';

import AddNewForm from '../components/forms/news/AddNews';

import '../styles/Cms.css';

const CmsPage = ({
  isAuth,
  userId,
  News,
  route,
  loadNewsByUserId,
})=>{
  const [isAddMode, setAddMode] = useState(false);
  // const history = useHistory();
  // const location = useLocation();


  const handlerClick = () =>{
    setAddMode(!isAddMode);
  }

  useEffect(()=>{
    loadNewsByUserId(userId);
  }, []);

  // const handlerClick = (e) =>{
  //   e.stopPropagation();
  //   if (location.pathname=='/cms/add/') {
  //     history.push('/cms');
  //   } else {
  //     history.push('/cms/add/');
  //   }
  // };

  return (
    <Page>
      {isAuth?<div className='cms'>
        {isAddMode?
          <AddNewForm onClose={handlerClick}/>:
          <button
            className="btn cms__btn"
            onClick={handlerClick}>Add News</button>
        }
        {/* {renderRoutes(route.routes)} */}
        <ContainerNews news={News}/>
      </div>:
      <Redirect push='/'/>
      }
    </Page>

  );
};
const mapDispatchToProps = (dispatch) =>({
  loadNewsByUserId(id) {
    dispatch(getNewsById(id));
  },
});
const mapStateToProps = (state) =>({
  userId: state.Auth.id,
  isAuth: state.Auth.isAuth,
  News: state.Cms.news,
});

const loadDataById = (userId, store) => {
  return store.dispatch(loadNewsByUserId(userId));
};
export default {
  component: connect( mapStateToProps, mapDispatchToProps )(CmsPage),
  // loadDataById,
};
