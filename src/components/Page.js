import React from "react";

import {Menu} from './Menu'


export const Page = ({children}) =>
    <div className="page">
        <Menu/>
        <div className="container">
            {children}
        </div>
    </div>
    