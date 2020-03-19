import {TypeActions} from '../TypeActions';

export const News = (state = [], action) =>{
  switch (action.type) {
    case TypeActions.ADD_NEWS:
      return [{
        _id: action.id,
        title: action.title,
        description: action.description,
        fileName: action.fileName,
      }, ...state];
    case TypeActions.EDIT_NEWS:
      return state.map((itme) => itme._id==action.id?{
        ...itme,
        title: action.title,
        description: action.description,
        fileName: action.fileName,
      }:itme);
    case TypeActions.REMOVE_NEWS:
      return state.filter((item)=>item._id!=action.id);
    case TypeActions.LOAD_DATA_ALL:
      return [...action.news];
    default:
      return state;
  }
};
