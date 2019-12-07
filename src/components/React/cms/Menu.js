import React from "react";
import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

export const MainMenu = () =>
    <nav className="nav container">
        <Link className="nav-link" to="add">Добавить новость</Link>
        <Link className="nav-link" to="list">Показать все новости</Link>
    </nav>