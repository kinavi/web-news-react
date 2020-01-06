import React from "react";
import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

export const Header = () =>{
    return (
        <nav className="nav container">
            <Link className="nav-link " to="/cms">Добавить новость</Link>
            <Link className="nav-link " to="/">Показать все новости</Link>
        </nav>
    )
}
    