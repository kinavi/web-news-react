import React from 'react';
import {renderRoutes} from 'react-router-config';

const App = ({route}) =>{
  return <div className="app">{renderRoutes(route.routes)}</div>;
};

App.defaultProps = {
  route: null,
};

export default {component: App};
