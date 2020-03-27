import React, {useState} from 'react';

import {NewsLite} from '../news';
import {EditNews} from '../forms/news';

export const NewsSelectorForm = (props) =>{
  const [isEdit, setEdit] = useState(false);

  return (
      (isEdit)?
        <EditNews
          {...props}
          setEdit={setEdit}

        />:
        <NewsLite
          {...props}
          setEdit={setEdit}
        />
  );
};
