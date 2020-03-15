import React from 'react';
import {connect} from 'react-redux';

import {NewsSelectorForm} from '.';

const ListNewsCms = ({News}) =>{

  return (
    <div className="cms__container-news">
      {(!!News)?
        News.map((item, i)=>
          <NewsSelectorForm key={i} {...item} />):
        <div>Новостей нет</div>
      }

    </div>
  );
};


const mapStateToProps = (state) =>({
  News: state.News,
});

export default connect(
    mapStateToProps,
    null,
)(ListNewsCms);
