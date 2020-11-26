import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return <div className={classes.header}>
        <div className={classes.content}>
            <div className={classes.name}>Ksenia Kudriavtseva
                <div className={classes.specialization}>Front-end developer</div>
            </div>
            <nav className={classes.navigation}>
                <li className={`${classes.link} ${classes.active}`}>HOME</li>
                <li className={classes.link}>RESUME</li>
                <li className={classes.link}>PROJECTS</li>
                <li className={classes.link}>CONTACT</li>
            </nav>
        </div>
    </div>
}

export default Header