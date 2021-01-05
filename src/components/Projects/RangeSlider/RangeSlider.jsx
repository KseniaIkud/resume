import React from 'react'
import './range-slider.css'

import firstPanel from './img/panels/first.png'
import secondPanel from './img/panels/second.png'
import thirdPanel from './img/panels/third.png'
import forthPanel from './img/panels/forth.png'

import CommonProject from '../CommonProject/CommonProject'


const RangeSlider = (props) => {
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
    const description = {
        title: props.language === 'russian' && 'Слайдер с диапазоном' || props.language === 'english' && 'Range Slider',
        explanation: props.language === 'russian' && 'плагин для jQuery' || props.language === 'english' && 'plugin for jQuery',
        technologies: ['TypeScript', 'CSS (SCSS)', 'Webpack', props.language === 'russian' && 'MVC паттерн' || props.language === 'english' && 'MVC pattern']
    }

    return (
        <CommonProject language={props.language} mainList={sliderSettings} additionList={panels} description={description} github={'https://github.com/KseniaIkud/Range-slider'} isSlider={true}/>
    )
}

export default RangeSlider