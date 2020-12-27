import React from 'react'
import classes from './Projects.module.css'
import RangeSlider from './RangeSlider/RangeSlider'
import Website from './Website/Website'

const Projects = () => {
    return (
        <div className={classes.projectsPage}>
            <div className={classes.title}>
                my projects
            </div>
            <RangeSlider />
            <Website />
        </div>
    )
}

export default Projects