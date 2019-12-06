import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

export const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/cms">
            <Link to="add">[Добавить новость]</Link>
            <Link to="list">[Показать все новости]</Link>
        </NavLink>
        {/* <NavLink to="/about" activeStyle={selectedStyle}>
            [About]
        </NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>
            [Events]
        </NavLink>
        <NavLink to="/products" activeStyle={selectedStyle}>
            [Products]
        </NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>
            [Contact Us]
        </NavLink> */}
    </nav>