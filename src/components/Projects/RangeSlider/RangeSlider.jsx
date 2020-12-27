import React, {useState} from 'react'

import classes from '../Projects.module.css'
import './range-slider.css'

import firstPanel from '../../../img/projects/panels/first.png'
import secondPanel from '../../../img/projects/panels/second.png'
import thirdPanel from '../../../img/projects/panels/third.png'
import forthPanel from '../../../img/projects/panels/forth.png'
import arrow from '../../../img/arrow.png'

import SliderExample from "./SliderExample";


const RangeSlider = () => {
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

    return <div className={classes.project}>
            <div className={classes.projectExample}>
                <div className={classes.sliderWrapper}>
                    <div className={classes.slider}>
                        <SliderExample settings={slider}/>
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
        
}

export default RangeSlider