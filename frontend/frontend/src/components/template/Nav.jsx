/* eslint-disable import/no-anonymous-default-export */
import "./Nav.css"
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar para componente NavItem */}
            <a href="#/">
                <i className="fa fa-home">Início</i>
            </a>

            <a href="#/users">
                <i className="fa fa-users">Usuários</i>
            </a>
        </nav>
    </aside>