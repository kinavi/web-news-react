import React from "react";
import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import {Menu} from './Menu'


export const Page = ({children}) =>
    <div className="page ">
        <Menu/>
        <div className="container">
            {children}
        </div>
    </div>
    