import React from "react";
import Menu from '../cms/Menu'

const cmsPage = ({children}) =>
    <div className="page">
        <Menu/>
        {children}
    </div>

export default cmsPage