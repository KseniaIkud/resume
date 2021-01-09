import React, {useState} from 'react'
import classes from './BurgerMenu.module.css'
import SideBar from "../SideBar/SideBar";

const BurgerMenu = (props) => {
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
        <div className={isMenuOpen ? classes.menu : classes.menuClosed}>           
            <SideBar onMenuClick={onMenuClick} language={props.language} toggleLanguage={props.toggleLanguage}/>
        </div>

    </div>
}

export default BurgerMenu