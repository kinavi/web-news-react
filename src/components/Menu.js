import React from "react";
import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

export const Menu = () =>{
    return (
        <nav className="nav container">
            <Link className="nav-link " to="/cms">CMS</Link>
            <Link className="nav-link " to="/">Показать все новости</Link>
        </nav>
    )
}
    