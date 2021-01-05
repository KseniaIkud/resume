import React from 'react'
import classes from './SideBar.module.css'
import photo from './img/photo.png'
import github from './img/GitHub-Mark.png'
import telegram from './img/telegram.svg'
import whatsapp from './img/whatsapp.png'
import {NavLink} from "react-router-dom";


const SideBar = (props) => {
    const setEnglishLanguage = () => {
        if (props.language!== 'english') {
            props.toggleLanguage('english')
        }
    }
    const setRussianLanguage = () => {
        if (props.language!== 'russian') {
            props.toggleLanguage('russian')
        }
    }
    return <div className={classes.sideBar}>
            <div className={classes.introduction}>
                <img src={photo} alt="photo" className={classes.introductionPhoto}/>
                Front-end developer
            </div>
            <div className={classes.languageToggle}>
                <button 
                onClick={setEnglishLanguage}
                className={`${classes.languageToggleButton} ${props.language === 'english' ? classes.languageToggleButtonActive : null}`}>
                    En</button>
                <button 
                onClick={setRussianLanguage}
                className={`${classes.languageToggleButton} ${props.language === 'russian' ? classes.languageToggleButtonActive : null}`}>
                    Ru</button>
            </div>
            <div className={classes.download}>
                <div className={classes.downloadButton}>
                    <a className={classes.downloadLink} href="https://yadi.sk/i/sYtwS5gPxjqsEg">
                        Download CV
                    </a>
                </div>
                <div className={classes.downloadText}>
                    from yandex disk
                </div>
            </div>
            <nav className={classes.navigation}>
                <ul className={classes.navigationList}>
                    <li className={classes.link}>
                        <NavLink onClick={props.onMenuClick} className={classes.linkDefault} activeClassName={classes.linkActive} to='/home'>
                            About
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
                    <a href="https://github.com/KseniaIkud">
                        <img src={github} alt="gihub link" className={classes.contactsLink}/>
                    </a>
                    <a href="https://t.me/Xena995">
                        <img src={telegram} alt="telegram link" className={classes.contactsLink}/>    
                    </a>
                    <a href="https://wa.me/4915124410378">
                    <img src={whatsapp} alt="whatsapp link" className={classes.contactsLink}/>
                    </a>
                </div>
            </div>
    </div>
}
export default SideBar