import React, {useState} from 'react'
import classes from './BurgerMenu.module.css'
import SideBar from "../SideBar/SideBar";

const BurgerMenu = () => {
    const [isMenuOpen, toggleMenu] = useState(false)
    const onMenuClick = () => {
            if (isMenuOpen) {
                toggleMenu(false)
            } else {
                toggleMenu(true)
            }
        }

    return <div>
        <div className={classes.wrapper}>
            <div onClick={onMenuClick} className={`${classes.menuBurger} ${isMenuOpen && classes.menuBurgerOpen}`}>
                <span/>
            </div>
        </div>


        {isMenuOpen &&
            <SideBar onMenuClick={onMenuClick} /> }
    </div>
}

export default BurgerMenu