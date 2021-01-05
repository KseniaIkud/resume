import React from 'react'
import classes from './Home.module.css'

const AboutText = (props) => {
    if (props.isLanguageRus) {
        return (
            <div className={classes.text}>
                Ищу работу на начальную позицию в сфере front-end. 
                Есть опыт работы с TypeScript и React. 
                Если вы используете другой стек, готова освоить новые технологии.
                Пожалуйста, посетите мой профиль на <a href='https://github.com/KseniaIkud'>GitHub</a>, чтобы посмотреть на пример моего кода.
                Вы можете связаться со мной любым удобным для вас способом:
            </div>)
    } else {
        return (
            <div className={classes.text}>
                Seeking an entry-level position as a front-end developer. 
                Have experience with TypeScript and React. 
                If needed, ready to learn other technologies quickly. 
                Please visit my <a href='https://github.com/KseniaIkud'>GitHub</a> profile to have a look at my code. 
                In the case you are interested, please contact me:
            </div>)
    }
}
const Home = (props) => {
    
    return <div className={classes.content}>
        <div className={classes.title}>
            {props.isLanguageRus ? 'Обо мне' : 'About Me'}
        </div>
        <div className={classes.description}>
            <AboutText isLanguageRus={props.isLanguageRus} />
            <ul>
                <li>kudriavtseva_k@mail.ru</li>
                <li>+79319688544 (whatsapp, telegram)</li>
            </ul>
        </div>
        
    </div>
}

export default Home