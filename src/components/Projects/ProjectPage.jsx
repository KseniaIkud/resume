import React from 'react'
import classes from './ProjectPage.module.css'
import RangeSlider from './RangeSlider/RangeSlider'
import Website from './Website/Website'

const Projects = () => {
    return (
        <div className={classes.projectsPage}>
            <h1 className={classes.title}>
                my projects
            </h1>
            <div className={classes.project}>
                <RangeSlider />
            </div>
            <Website />
            
        </div>
    )
}

export default Projects