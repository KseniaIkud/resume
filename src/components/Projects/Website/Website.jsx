import React from 'react'

import mainDesktop from './img/desktop/main.png'
import mainMobile from './img/mobile/main.jpg'
import calendarDesktop from './img/desktop/calendar.png'
import calendarMobile from './img/mobile/calendar.jpg'
import guestsDesktop from './img/desktop/guests.png'
import guestsMobile from './img/mobile/guests.jpg'
import burger from './img/mobile/burger.jpg'
import CommonProject from '../CommonProject/CommonProject'

const Website = (props) => {
    const desktopImages = [mainDesktop, calendarDesktop, guestsDesktop, mainDesktop]
    const mobileImages = [mainMobile, calendarMobile, guestsMobile, burger]

    const description = {
        title: props.language === 'russian' && 'Сайт отеля' || props.language === 'english' && 'Hotel website',
        explanation: props.language === 'russian' && 'верстка' || props.language === 'english' && 'page making',
        technologies: ['Pug', 'CSS (SCSS)', 'Webpack', 'jQuery'],
    }

    return ( 
        <CommonProject language={props.language} mainList={desktopImages} additionList={mobileImages} description={description} github={'https://github.com/KseniaIkud/Hotel-website'} isBorder={true}/>
    )
}

export default Website