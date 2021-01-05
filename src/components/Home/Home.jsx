import React from 'react'
import classes from './Home.module.css'

const Home = () => {
    return <div className={classes.content}>
        <div className={classes.title}>
            About Me
        </div>
        <div className={classes.description}>
            Seeking an entry-level position as a front-end developer. 
            Have experience with TypeScript and React. 
            If needed, ready to learn other technologies quickly. 
            Please visit my <a href='https://github.com/KseniaIkud'>GitHub</a> profile to have a look at my code. 
            In the case you are interested, please contact me:
            <ul>
                <li>kudriavtseva_k@mail.ru</li>
                <li>+79319688544 (whatsapp, telegram)</li>
            </ul>
        </div>
    </div>
}

export default Home