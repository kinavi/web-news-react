import React from 'react';
import {connect} from 'react-redux';

import {NewsPreview} from '.';

const ListNewsMain = ({News}) =>{
  return (
    <div>
      {(!!News)?
        News.map((news, i)=>
          <NewsPreview key={i} {...news}/>,
        ) :
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
)(ListNewsMain);
