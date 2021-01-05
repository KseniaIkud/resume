import React, {useState} from 'react'
import classes from './CommonProject.module.css'
import SliderExample from '../RangeSlider/SliderExample'

const CommonProject = (props) => {
    const mainList = props.mainList
    const additionList = props.additionList

    const [order, setOrder] = useState(0)
    const [main, setMain] = useState(mainList[order])
    const [addition, setAddition] = useState(additionList[order])

    const onLeftClick = () => {
        setOrder(order - 1)
        setMain(mainList[order - 1])
        setAddition(additionList[order - 1])
    }

    const onRightClick = () => {
        setOrder(order + 1)
        setMain(mainList[order + 1])
        setAddition(additionList[order + 1])
    }

    return (
        <div className={classes.project}>
            <div className={classes.projectWrapper}>
                <div className={classes.projectExample}>
                    {props.isSlider ?
                        <div className={classes.slider}>
                            <SliderExample settings={main} />
                        </div>
                        :
                        <img className={classes.website} src={main} alt="основной вид"/>
                }
                    
                </div>
                <button disabled={order < 1} className={classes.arrowLeft} onClick={onLeftClick}>
                </button>
                <button disabled={order > 2} className={classes.arrowRight} onClick={onRightClick}>
                </button>
            </div>
            <div className={classes.projectAddition}>
                <div className={classes.projectAddition}>
                    <img src={addition} className={`${classes.imgSettings} ${props.isBorder && classes.imgSettingsBorder}`} alt="мобильная версия сайта"/>
                </div>
                <button disabled={order > 2} className={`${classes.arrowRight} ${classes.arrowRightShifted}`} onClick={onRightClick}>
                </button>
            </div>
            <div className={classes.description}>
                <div className={classes.descriptionTitle}>
                    {props.description.title}
                </div>
                <div className={classes.descriptionExplanation}>
                    {props.description.explanation}
                </div>
                <div className={classes.descriptionSubtitle}>
                    {props.language === 'russian' && 'Основные технологии:'}
                    {props.language === 'english' && 'Main Technologies:'}
                </div>
                <ul className={classes.descriptionTechnologies}>
                    <li>{props.description.technologies[0]}</li>
                    <li>{props.description.technologies[1]}</li>
                    <li>{props.description.technologies[2]}</li>
                    <li>{props.description.technologies[3]}</li>
                </ul>
                <button className={classes.descriptionButton}>
                    <a href={props.github} className={classes.descriptionLink}>
                        {props.language === 'russian' && 'Репозиторий GitHub'}
                        {props.language === 'english' && 'Github repository'}
                    </a>
                </button>
            </div>
        </div>
    )
}

export default CommonProject