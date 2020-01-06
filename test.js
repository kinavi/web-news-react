import React from "react";
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

const TEST = ({req, Routes}) =>{
    return(
        <StaticRouter location={req.path} >
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
    )
}
export default TEST
