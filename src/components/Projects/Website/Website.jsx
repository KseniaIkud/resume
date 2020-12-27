import React, {useState} from 'react'
import classes from '../Projects.module.css'

import arrow from '../../../img/arrow.png'

import mainDesktop from '../../../img/projects/website/desktop/main.png'
import mainMobile from '../../../img/projects/website/mobile/main.jpg'
import calendarDesktop from '../../../img/projects/website/desktop/calendar.png'
import calendarMobile from '../../../img/projects/website/mobile/calendar.jpg'
import guestsDesktop from '../../../img/projects/website/desktop/guests.png'
import guestsMobile from '../../../img/projects/website/mobile/guests.jpg'
import burger from '../../../img/projects/website/mobile/burger.jpg'

const Website = () => {
    const desktopImages = [mainDesktop, calendarDesktop, guestsDesktop, mainDesktop]
    const mobileImages = [mainMobile, calendarMobile, guestsMobile, burger]
    const [siteOrder, setSiteOrder] = useState(0)
    const [desktop, setDesktop] = useState(desktopImages[siteOrder])
    const [mobile, setMobile] = useState(mobileImages[siteOrder])

    const onLeftClick = () => {
        setSiteOrder(siteOrder - 1)
        setDesktop(desktopImages[siteOrder - 1])
        setMobile(mobileImages[siteOrder - 1])
    }


    const onRightClick = () => {
        setSiteOrder(siteOrder + 1)
        setDesktop(desktopImages[siteOrder + 1])
        setMobile(mobileImages[siteOrder + 1])
    }

    return (
        <div className={classes.project}>
            <div className={classes.projectExample}>
                <img className={classes.sliderWrapper} src={desktop} alt="десктоп версия сайта"/>
                <button disabled={siteOrder < 1} className={classes.arrowLeft} onClick={onLeftClick}>
                    <img src={arrow} alt="arrow" className={classes.imgArrow}/>
                </button>
                <button disabled={siteOrder > 2} className={classes.arrowRight} onClick={onRightClick}>
                    <img src={arrow} alt="arrow" className={classes.imgArrow}/>
                </button>
            </div>
            <div className={classes.projectAddition}>
                <img src={mobile} className={classes.imgSettings} alt="мобильная версия сайта"/>
                <button disabled={siteOrder > 2} className={`${classes.arrowRight} ${classes.arrowRightShifted}`} onClick={onRightClick}>
                    <img src={arrow} alt="arrow" className={classes.imgArrow}/>
                </button>
            </div>
        </div>
    )
}

export default Website