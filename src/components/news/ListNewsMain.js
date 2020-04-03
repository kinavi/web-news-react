import React, {useState, useEffect} from 'react';

// import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

import {NewsPreview, FORMAT_NEWS} from './NewsPreview';


export const ListNewsMain = ({value}) =>{
  const [news, setNews] = useState(getSplitedArray(value));

  useEffect(()=>{
    setNews(getSplitedArray(value));
  }, [value]);

  return (
    <div className="container">
      {(news!=undefined&&news.length>0)?
        news.map((item, i)=>
          <NewsPreview
            key={i}
            format={i%2==!1?FORMAT_NEWS.LEFT:FORMAT_NEWS.RIGHT}
            value={item}/>,
        ):
           <div>No News</div>

      }
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

