import React from 'react'
import classes from './Skills.module.css'

const Skills = () => {
    return (
    <div className={classes.content}>
        <h1 className={classes.title}>
            Main Skills
        </h1>
        <div className={classes.skills}>
            <div>
                <ul>
                    <li className={classes.technology}> React
                        <ul className={classes.clarification}>
                            <li className={classes.package}>Redux</li>
                            <li className={classes.package}>React-Redux</li>
                            <li className={classes.package}>React-final-form</li>
                            <li className={classes.package}>Hooks</li>
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
                    <li className={classes.technology}>Languages
                        <ul className={classes.clarification}>
                            <li className={classes.package}>Russian</li>
                            <li className={classes.package}>English - B2</li>
                        </ul>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Skills