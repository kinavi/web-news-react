import React from "react";
import { MainMenu } from '../cms/Menu'

const CmsPage = ({children}) =>
    <div className="page ">
        <MainMenu/>
        <div className="container">
            {children}
        </div>
    </div>

export default CmsPage