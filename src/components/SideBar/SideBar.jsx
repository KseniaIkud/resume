import React from 'react'
import classes from './SideBar.module.css'
import photo from '../../img/photo.png'
import github from '../../img/GitHub-Mark.png'
import telegram from '../../img/telegram.svg'
import whatsapp from '../../img/whatsapp.png'
import {NavLink} from "react-router-dom";


const SideBar = (props) => {
    return <div className={classes.sideBar}>
            <div className={classes.introduction}>
                <img src={photo} alt="photo" className={classes.introductionPhoto}/>
                Front-end developer
            </div>
            <nav className={classes.navigation}>
                <ul className={classes.navigationList}>
                    <li className={classes.link}>
                        <NavLink onClick={props.onMenuClick} className={classes.linkDefault} activeClassName={classes.linkActive} to='/home'>
                            Home
                        </NavLink>
                    </li>
                    <li className={classes.link}>
                        <NavLink onClick={props.onMenuClick} className={classes.linkDefault} activeClassName={classes.linkActive} to='/skills'>
                            Skills
                        </NavLink>
                    </li>
                    <li className={classes.link}>
                        <NavLink onClick={props.onMenuClick} className={classes.linkDefault} activeClassName={classes.linkActive} to='/projects'>
                            Projects
                        </NavLink>
                    </li>
                    <li className={classes.link}>
                        <NavLink onClick={props.onMenuClick} className={classes.linkDefault} activeClassName={classes.linkActive} to='/games'>
                            Games
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.contacts}>
                <div className={classes.contactsTitle}>
                    Contacts
                </div>
                <div className={classes.contactsEmail}>
                    kudriavtseva_k@mail.ru
                </div>
                <div className={classes.contactsSocial}>
                    <img src={github} alt="gihub link" className={classes.contactsLink}/>
                    <img src={telegram} alt="telegram link" className={classes.contactsLink}/>
                    <img src={whatsapp} alt="whatsapp link" className={classes.contactsLink}/>
                </div>
            </div>
    </div>
}
export default SideBar