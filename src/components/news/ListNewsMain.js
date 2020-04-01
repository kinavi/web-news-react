import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
// import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

import {NewsPreview, FORMAT_NEWS} from './NewsPreview';


const ListNewsMain = ({News}) =>{
  const [news, setNews] = useState(getSplitedArray(News));
  const step = 2;
  const [count, setCount] = useState(1);
  console.log('news.length - ', news.length);
  console.log('count- ', count);
  useEffect(()=>{
    setNews(getSplitedArray(News));
  }, [News]);

  const handlerShowMoreClick = () =>{
    setCount(count+1);
  };

  return (
    <div className="container">
      {(news!=undefined&&news.length>0)?
        news.map((item, i)=>((i)<step*count)?
            <NewsPreview
              key={i}
              format={i%2==!1?FORMAT_NEWS.LEFT:FORMAT_NEWS.RIGHT}
              value={item}/>:
            null,
        ):
           <div>No News</div>

      }
      {(count<news.length/step)&&<button className='btn' onClick={handlerShowMoreClick}>show more</button>}

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
