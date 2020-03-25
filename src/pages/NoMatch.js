import React from 'react';
import Page from '../components/Page';



const NoMatch = ({route}) =>{
  return (
    <Page>
      <div>404</div>
      <div>Page not found</div>
    </Page>

  );
};

export default {
  component: NoMatch,
};
