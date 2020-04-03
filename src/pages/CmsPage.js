import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Page from '../components/Page';
import {ContainerNews} from '../components/cms/ContainerNews';
import {getNewsById} from '../store/redusers/CmsRedusers';

import AddNewForm from '../components/forms/news/AddNews';

import '../styles/Cms.css';

const CmsPage = ({
  isAuth,
  userId,
  News,
  loadNewsByUserId,
})=>{
  const [isAddMode, setAddMode] = useState(false);

  const handlerClick = () =>{
    setAddMode(!isAddMode);
  };

  useEffect(()=>{
    loadNewsByUserId(userId);
  }, []);

  return (
    <Page>
      {isAuth?<div className='cms'>
        {isAddMode?
          <AddNewForm onClose={handlerClick}/>:
          <button
            className="btn cms__btn"
            onClick={handlerClick}>Add News</button>
        }
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

export default {
  component: connect( mapStateToProps, mapDispatchToProps )(CmsPage),
};
