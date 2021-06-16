import React from 'react'

export const Navbar: React.FunctionComponent = () => {
    return(
        <nav>
            <div className="nav-wrapper #42a5f5 blue lighten-1 px1">
                <a href="/" className="brand-logo right">React + TypScript</a>
                <ul className="left hide-on-med-and-down">
                    <li><a href="/">Список дел</a></li>
                    <li><a href="/">Информация</a></li>
                </ul>
            </div>
        </nav>
    )

}