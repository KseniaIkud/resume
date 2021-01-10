import React from 'react'
import classes from './SideBar.module.css'
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
                <div alt="photo" className={classes.introductionPhoto}/>
                {props.language === 'russian' && 'Front-end разработчик'} 
                {props.language === 'english' && 'Front-end developer'}
            </div>
            <div className={classes.languageToggle}>
                <button 
                onClick={setEnglishLanguage}
                className={`${classes.languageToggleButton} ${props.language === 'english' ? classes.languageToggleButtonActive : null}`}>
                    Eng</button>
                <button 
                onClick={setRussianLanguage}
                className={`${classes.languageToggleButton} ${props.language === 'russian' ? classes.languageToggleButtonActive : null}`}>
                    Рус</button>
            </div>
            <div className={classes.download}>
                <div className={classes.downloadButton}>
                    <a className={classes.downloadLink} href="https://yadi.sk/i/sYtwS5gPxjqsEg">
                        {props.language === 'russian' && 'Скачать CV'} 
                        {props.language === 'english' && 'Download CV'}
                    </a>
                </div>
                <div className={classes.downloadText}>
                    {props.language === 'russian' && 'с яндекс диска'} 
                    {props.language === 'english' && 'from yandex disk'}
                </div>
            </div>
            <nav className={classes.navigation}>
                <ul className={classes.navigationList}>
                    <li className={classes.link}>
                        <NavLink onClick={props.onMenuClick} className={classes.linkDefault} activeClassName={classes.linkActive} to='/home'>
                        {props.language === 'russian' && 'Обо мне'} {props.language === 'english' && 'About'}
                        </NavLink>
                    </li>
                    <li className={classes.link}>
                        <NavLink onClick={props.onMenuClick} className={classes.linkDefault} activeClassName={classes.linkActive} to='/skills'>
                        {props.language === 'russian' && 'Навыки'} {props.language === 'english' && 'Skills'}
                        </NavLink>
                    </li>
                    <li className={classes.link}>
                        <NavLink onClick={props.onMenuClick} className={classes.linkDefault} activeClassName={classes.linkActive} to='/projects'>
                        {props.language === 'russian' && 'Проекты'} {props.language === 'english' && 'Projects'}
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.contacts}>
                <div className={classes.contactsTitle}>
                    {props.language === 'russian' && 'Контакты'} {props.language === 'english' && 'Contacts'}
                </div>
                <div className={classes.contactsEmail}>
                    kudriavtseva_k@mail.ru
                </div>
                <div className={classes.contactsSocial}>
                    <a href="https://github.com/KseniaIkud" className={classes.github}></a>
                    <a href="https://t.me/Xena995" className={classes.telegram}></a>
                    <a href="https://wa.me/4915124410378" className={classes.whatsapp}></a>
                </div>
            </div>
    </div>
}
export default SideBar