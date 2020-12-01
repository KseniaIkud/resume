import React, {useState} from 'react'
import classes from './Projects.module.css'
import firstPanel from '../../img/projects/panels/first.png'
import secondPanel from '../../img/projects/panels/second.png'
import thirdPanel from '../../img/projects/panels/third.png'
import forthPanel from '../../img/projects/panels/forth.png'
import firstSlider from '../../img/projects/sliders/first.png'
import secondSlider from '../../img/projects/sliders/second.png'
import thirdSlider from '../../img/projects/sliders/third.png'
import forthSlider from '../../img/projects/sliders/forth.png'
import arrow from '../../img/arrow.png'

const Projects = () => {

    const panels = [firstPanel, secondPanel, thirdPanel, forthPanel]
    const sliders = [firstSlider, secondSlider, thirdSlider, forthSlider]
    const [sliderOrder, setSliderOrder] = useState(0)
    const [panel, setPanel] = useState(panels[sliderOrder])
    const [slider, setSlider] = useState(sliders[sliderOrder])
    const onLeftArrowClick = () => {
        setSliderOrder(sliderOrder - 1)
        setPanel(panels[sliderOrder - 1])
        setSlider(sliders[sliderOrder - 1])
    }
    const onRightArrowClick = () => {
        setSliderOrder(sliderOrder + 1)
        setPanel(panels[sliderOrder + 1])
        setSlider(sliders[sliderOrder + 1])
    }
    return <div className={classes.projectsPage}>
        <div className={classes.title}>
            my projects
        </div>
        <div className={classes.project}>


            <div className={classes.projectExample}>
                <img src={slider} alt="слайдер" className={classes.imgSlider}/>
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
                <img src="" alt="десктоп версия сайта"/>
            </div>
            <div className={classes.projectAddition}>
                <img src="" alt="мобильная версия сайта"/>
            </div>
        </div>
        <div className={classes.project}>
            <div className={classes.projectExample}>
                <img src="" alt="интерфейс игры"/>
            </div>
            <div className={classes.projectAddition}>
                <img src="" alt="правила игры"/>
            </div>
        </div>
    </div>
}

export default Projects