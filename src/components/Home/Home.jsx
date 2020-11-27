import React from 'react'
import classes from './Home.module.css'
import photo from '../../img/photo.jpg'

const Home = () => {
    return <div className={classes.homePage}>
        <img src={photo} alt="photo" className={classes.photo}/>
        <div className={classes.rounds}>
            <div className={`${classes.link} ${classes.resume}`}>skills</div>
            <div className={`${classes.link} ${classes.works}`}>projects</div>
            <div className={`${classes.link} ${classes.contact}`}>contact</div>
        </div>
        <div className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae commodi cumque deleniti, non nostrum
            sed. Consectetur doloremque enim inventore ipsa! Autem corporis et, illo illum ipsam nobis temporibus
            voluptatibus.
        </div>

    </div>
}


export default Home