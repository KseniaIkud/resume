import React, {useState} from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    const [isBurgerMenuOpen, toggleBurgerMenu] = useState(false)
    const onBurgerMenuClick = () => {
        if (isBurgerMenuOpen) {
            toggleBurgerMenu(false)
        } else {
            toggleBurgerMenu(true)
        }

    }
    return <div className={classes.header}>
        <div className={classes.content}>
            <div className={classes.name}>Ksenia Kudriavtseva
                <div className={classes.specialization}>Front-end developer</div>
            </div>
            <div className={`${classes.burgerMenu} ${isBurgerMenuOpen && classes.burgerMenuOpen}`}
                 onClick={onBurgerMenuClick}>
                <span/>
            </div>
            <nav className={`${classes.navigation} ${isBurgerMenuOpen ? classes.shown : classes.hidden}`}>
                <ul className={classes.list}>
                    <li className={classes.link}>
                        <NavLink onClick={onBurgerMenuClick} to='/home' className={classes.linkDefault} activeClassName={classes.linkActive}>
                            home
                        </NavLink>
                    </li>
                    <li className={classes.link}>
                        <NavLink onClick={onBurgerMenuClick} to='/skills' className={classes.linkDefault} activeClassName={classes.linkActive}>
                            skills
                        </NavLink>
                    </li>
                    <li className={classes.link}>
                        <NavLink onClick={onBurgerMenuClick} to='/projects' className={classes.linkDefault} activeClassName={classes.linkActive}>
                            projects
                        </NavLink>
                    </li>
                    <li className={classes.link}>
                        <NavLink onClick={onBurgerMenuClick} to='/games' className={classes.linkDefault} activeClassName={classes.linkActive}>
                            games
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
}

export default Header
