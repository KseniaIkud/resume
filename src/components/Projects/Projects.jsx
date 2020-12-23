import React, {useState} from 'react'
import classes from './Projects.module.css'
import './range-slider.css'
import firstPanel from '../../img/projects/panels/first.png'
import secondPanel from '../../img/projects/panels/second.png'
import thirdPanel from '../../img/projects/panels/third.png'
import forthPanel from '../../img/projects/panels/forth.png'
import arrow from '../../img/arrow.png'
import RangeSliders from "./RangeSliders";

import mainDesktop from '../../img/projects/website/desktop/main.png'
import mainMobile from '../../img/projects/website/mobile/main.jpg'
import calendarDesktop from '../../img/projects/website/desktop/calendar.png'
import calendarMobile from '../../img/projects/website/mobile/calendar.jpg'
import guestsDesktop from '../../img/projects/website/desktop/guests.png'
import guestsMobile from '../../img/projects/website/mobile/guests.jpg'
import burger from '../../img/projects/website/mobile/burger.jpg'

const Projects = () => {

    const panels = [firstPanel, secondPanel, thirdPanel, forthPanel]
    const sliderSettings = [{
        min: 0,
        max: 1000,
        initialValue: 200,
        step: 100,
        isScale: true,
        overThumbElement: true,
    }, {
        min: -400,
        max: 1000,
        initialValue: 0,
        step: 10,
        rightProgressBar: true,
        overThumbElement: true
    }, {
        min: -150,
        max: 0,
        leftValue: -80,
        rightValue: -30,
        step: 1,
        isRange: true,
        overThumbElement: true
    }, {
        min: 1000,
        max: 9000,
        leftValue: 1500,
        rightValue: 7500,
        step: 500,
        isRange: true,
        isVertical: true,
        isScale: true
    }]
    const [sliderOrder, setSliderOrder] = useState(0)
    const [panel, setPanel] = useState(panels[sliderOrder])
    const [slider, setSlider] = useState(sliderSettings[sliderOrder])
    const onLeftArrowClick = () => {
        setSliderOrder(sliderOrder - 1)
        setPanel(panels[sliderOrder - 1])
        setSlider(sliderSettings[sliderOrder - 1])
    }
    const onRightArrowClick = () => {
        setSliderOrder(sliderOrder + 1)
        setPanel(panels[sliderOrder + 1])
        setSlider(sliderSettings[sliderOrder + 1])
    }

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

    return <div className={classes.projectsPage}>
        <div className={classes.title}>
            my projects
        </div>
        <div className={classes.project}>
            <div className={classes.projectExample}>
                <div className={classes.sliderWrapper}>
                    <div className={classes.slider}>
                        <RangeSliders settings={slider}/>
                    </div>
                </div>
                <button disabled={sliderOrder < 1} className={classes.arrowLeft} onClick={onLeftArrowClick}>
                    <img src={arrow} alt="arrow" className={classes.imgArrow}/>
                </button>
                <button disabled={sliderOrder > 2} className={classes.arrowRight} onClick={onRightArrowClick}>
                    <img src={arrow} alt="arrow" className={classes.imgArrow}/>
                </button>
            </div>
            <div className={classes.projectAddition}>
                <img src={panel} alt="настройки" className={classes.imgSettings}/>
                <button disabled={sliderOrder > 2} className={`${classes.arrowRight} ${classes.arrowRightShifted}`} onClick={onRightArrowClick}>
                    <img src={arrow} alt="arrow" className={classes.imgArrow}/>
                </button>
            </div>

            <div className={classes.description}>
                <div className={classes.descriptionTitle}>
                    Range slider
                </div>
                <div className={classes.descriptionExplanation}>
                    plugin for jQuery
                </div>
                <div className={classes.descriptionSubtitle}>
                    Main Technologies:
                </div>
                <ul className={classes.descriptionTechnologies}>
                    <li>TypeScript</li>
                    <li>CSS (SCSS)</li>
                    <li>Webpack</li>
                    <li>MVC pattern</li>
                </ul>
                <button className={classes.descriptionButton}>
                    <a href="https://github.com/KseniaIkud/Range-slider" className={classes.descriptionLink}>Github
                        repository</a>
                </button>
            </div>
        </div>
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



        <div className={classes.project}>
            <div className={classes.projectExample}>
                <img src="" alt="интерфейс туду"/>
            </div>
            <div className={classes.projectAddition}>
                <img src="" alt="сам список"/>
            </div>
        </div>
    </div>
}

export default Projects