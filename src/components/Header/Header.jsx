import React, {useState} from 'react'
import classes from './Header.module.css'

const Header = () => {
    const [isMenuOpen, setOpenMenu] = useState(false)
    const onBurgerClick = () => {
        if (isMenuOpen) {
            setOpenMenu(false)
        } else {
            setOpenMenu(true)
        }

    }
    return <div className={classes.header}>
        <div className={classes.content}>
            <div className={classes.name}>Ksenia Kudriavtseva
                <div className={classes.specialization}>Front-end developer</div>
            </div>
            <div className={classes.burgerMenu} onClick={onBurgerClick}>
                <span/>
            </div>
            <nav className={`${classes.navigation} ${isMenuOpen ? classes.shown : classes.hidden}`}>
                <ul className={classes.list}>
                    <li className={`${classes.link} ${classes.active}`}>home</li>
                    <li className={classes.link}>skills</li>
                    <li className={classes.link}>projects</li>
                    <li className={classes.link}>contact</li>
                </ul>
            </nav>
        </div>
    </div>
}

export default Header
