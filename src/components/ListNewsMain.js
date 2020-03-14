import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

import {NewsPreview, FORMAT_NEWS} from '.';
import '../styles/News.css';

const ListNewsMain = ({News}) =>{
  const [news, setNews] = useState(getSplitedArray(News));
  // console.log('news - ', news);

  useEffect(()=>{
    setNews(getSplitedArray(News));
  }, [News]);


  return (
    <div className="container">
      {(news!=undefined&&news.length>0)?
        news.map((item, i)=>
          <NewsPreview
            key={i}
            format={i%2==!1?FORMAT_NEWS.LEFT:FORMAT_NEWS.RIGHT}
            value={item}
          />,
        ) :
        <div>No News</div>

      }
      <button className='btn'>show more</button>

    </div>
  );
};

const getSplitedArray = (target) =>{
  if (target==undefined) return undefined;

  const copyTarget = [...target];
  let result = [];
  while (copyTarget.length!=0) {
    result=[...result, copyTarget.splice(0, 3)];
  }
  return result;
};


const mapStateToProps = (state) =>({
  News: state.News,
});

export default connect(
    mapStateToProps,
    null,
)(ListNewsMain);
