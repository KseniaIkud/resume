import React from 'react'
import classes from './Home.module.css'
import photo from '../../img/photo.jpg'
const Home = () => {
    return <div className={classes.homePage}>
        <img src={photo} alt="photo" className={classes.photo}/>
        <div className={classes.information}>
            {/*<div className={classes.title}>Hello,*/}
            {/*    <div className={classes.subtitle}>a bit about me:</div>*/}
            {/*</div>*/}
            <div className={classes.link}>
                <div className={`${classes.resume}`}>RESUME</div>
                <div className={`${classes.works}`}>PROJECTS</div>
                <div className={`${classes.contact}`}>CONTACT</div>
            </div>
            <div className={classes.welcome}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae commodi cumque deleniti, non nostrum sed. Consectetur doloremque enim inventore ipsa! Autem corporis et, illo illum ipsam nobis temporibus voluptatibus.
            </div>
        </div>

    </div>
}




export default Home