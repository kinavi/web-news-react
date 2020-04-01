import {News } from '../../../server/mongoose';
import {ActionsNews} from '../../redusers/NewsRedusers';

export const loadNewsByUserId = (id) => async (dispatch) =>{
  const news = await News.find({userId: id}).sort({dateCreate: -1});
  
  dispatch({
    type: ActionsNews.LOAD_DATA_ALL,
    news,
  });
}

export const loadNewsByDate = ()=> async (dispatch) =>{
  const news = await News.find({}).sort({dateCreate: -1});
  console.log('news - ', news);

  dispatch({
    type: ActionsNews.LOAD_DATA_ALL,
    news,
  });
};
