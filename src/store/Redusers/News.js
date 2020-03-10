import {TypeActions} from '../TypeActions';

export const News = (state = [], action) =>{
  switch (action.type) {
    case TypeActions.ADD_NEWS:
      return [{
        id: action.id,
        title: action.title,
        description: action.description,
        fileName: action.fileName,
      }, ...state];
    case TypeActions.EDIT_NEWS:
      return state.map((itme) => itme.id==action.id?{
        ...itme,
        title: action.title,
        description: action.description,
        fileName: action.fileName,
      }:itme);
    case TypeActions.REMOVE_NEWS:
      return state.filter((item)=>item.id!=action.id);
    default:
      return state;
  }
};
