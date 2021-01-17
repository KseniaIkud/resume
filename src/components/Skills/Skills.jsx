import React from 'react'
import classes from './Skills.module.css'

const Skills = (props) => {
    return (
    <div className={classes.content}>
        <h1 className={classes.title}>
            {props.language === 'russian' ? 'Основные навыки' : 'Main Skills'}
        </h1>
        <div className={classes.skills}>
            <div>
                <ul>
                    <li className={classes.technology}> React
                        <ul className={classes.clarification}>
                            <li className={classes.package}>Redux</li>
                            <li className={classes.package}>React-Redux</li>
                        </ul>
                    </li>
                    <li className={classes.technology}> Javascript
                        <ul className={classes.clarification}>
                            <li className={classes.package}>TypeScript</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={classes.line}></div>
            <div>
                <ul>
                    <li className={classes.technology}> {props.language === 'russian' ? 'Языки' : 'Languages'}
                        <ul className={classes.clarification}>
                            <li className={classes.package}>{props.language === 'russian' ? 'Русский' : 'Russian'}</li>
                            <li className={classes.package}>{props.language === 'russian' ? 'Английский' : 'English'} - B2</li>
                        </ul>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Skills