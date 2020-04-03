// import {ActionsNews} from '../TypeActions';
export const ActionsNews = {
  LOAD_LIST_NEWS: 'LOAD_LIST_NEWS',
  ADD_NEWS: 'ADD_NEWS',
  REMOVE_NEWS: 'REMOVE_NEWS',
  EDIT_NEWS: 'EDIT_NEWS',
  LOAD_DATA_ALL: 'LOAD_DATA_ALL',
  SORT_BY_AUTHOR: 'SORT_BY_AUTHOR'
};

export const ListNewsRedusers = (state = [], action) =>{
  switch (action.type) {
    case ActionsNews.ADD_NEWS:
      return [{
        _id: action.id,
        userId: action.userId,
        title: action.title,
        description: action.description,
        fileName: action.fileName,
        author: action.action,
      }, ...state];
    case ActionsNews.EDIT_NEWS:
      return state.map((itme) => itme._id==action.id?{
        ...itme,
        title: action.title,
        description: action.description,
        fileName: action.fileName,
      }:itme);
    case ActionsNews.REMOVE_NEWS:
      return state.filter((item)=>item._id!=action.id);
    case ActionsNews.SORT_BY_AUTHOR:
      return state.filter((item)=>item.author==action.author);
    case ActionsNews.LOAD_DATA_ALL:
      return [...action.news];
    default:
      return state;
  }
};

export const addNewAC = (news) =>({
  type: ActionsNews.ADD_NEWS,
  id: news._id,
  userId: news.userId,
  title: news.title,
  description: news.description,
  fileName: news.fileName,
  author: news.author,
  dateCreate: news.dateCreate,
});

export const editNewAC = (news) =>({
  type: ActionsNews.EDIT_NEWS,
  id: news._id,
  title: news.title,
  description: news.description,
  fileName: news.fileName,
});

export const removeNewsAC = (_id) =>({
  type: ActionsNews.REMOVE_NEWS,
  id: _id,
});
