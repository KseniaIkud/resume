import React from 'react'
import classes from './ProjectPage.module.css'
import RangeSlider from './RangeSlider/RangeSlider'
import Website from './Website/Website'

const Projects = (props) => {
    return (
        <div className={classes.projectsPage}>
            <h1 className={classes.title}>
    {props.language === 'russian' ? 'мои проекты' : 'my projects'}
            </h1>
            <div className={classes.project}>
                <RangeSlider language={props.language} />
            </div>
            <Website language={props.language}/>
            
        </div>
    )
}

export default Projects