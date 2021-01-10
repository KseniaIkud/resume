import React from 'react'
import classes from './Start.module.css'

const Start = (props) => {
    return <div className={classes.start}>
        <div className={classes.content}>
            {props.language === 'russian' ? 'резюме front-end' : null}
            {props.language === 'english' ? 'front-end resume' : null}
        </div>
    </div>
    
}

export default Start