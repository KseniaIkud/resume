import React from 'react'
import classes from './Footer.module.css'
import github from '../../img/GitHub-Mark.png'
import telegram from '../../img/telegram.svg'
import whatsapp from '../../img/whatsapp.png'

const Footer = () => {
    return <div className={classes.footer}>
        <div className={classes.content}>
            <div className={classes.contacts}>
                <div className={classes.title}>
                    Contacts
                </div>
                <div className={classes.email}>
                    kudriavtseva_k@mail.ru
                </div>
                <div className={classes.socialContact}>
                    <img className={`${classes.socialLogo}`} src={github} alt="github"/>
                    <img className={classes.socialLogo} src={telegram} alt="telegram"/>
                    <img className={classes.socialLogo} src={whatsapp} alt="whatsapp"/>
                </div>
            </div>
        </div>
    </div>
}

export default Footer