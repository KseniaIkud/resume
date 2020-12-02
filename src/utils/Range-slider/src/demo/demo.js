import './demo.css'


const getValue = (id) => {
  return Number(document.getElementById(id).value)
}
const getBooleanValue = (id) => {
  return document.getElementById(id).checked
}
const rangeSliderNumbersId = ['min', 'max', 'initialValue', 'leftValue', 'rightValue', 'step']
const rangeSliderBooleansId = ['isRange', 'rightProgressBar', 'overThumbElement', 'isVertical', 'isScale']
const rangeSliderId = ['rangeSlider_first', 'rangeSlider_second', 'rangeSlider_third', 'rangeSlider_forth']
const renderRangeSlider = (id, panel) => {
  let elem = document.getElementById(id)
  let div = elem.firstElementChild
  if (div) {
    elem.removeChild(div)
  }
  $('#'+id).rangeSlider({
    min: panel.min,
    max: panel.max,
    initialValue: panel.initialValue,
    leftValue: panel.leftValue,
    rightValue: panel.rightValue,
    step: panel.step,
    isRange: panel.isRange,
    rightProgressBar: panel.rightProgressBar,
    overThumbElement: panel.overThumbElement,
    isVertical: panel.isVertical,
    isScale: panel.isScale
  })
}
for (let i=1; i<5; i++) {
  const panel = {
    min: getValue('min'+ i),
    max: getValue('max'+ i),
    initialValue: getValue('initialValue'+ i),
    leftValue: getValue('leftValue'+ i),
    rightValue: getValue('rightValue'+ i),
    step: getValue('step'+ i),
    isRange: getBooleanValue('isRange'+ i),
    rightProgressBar: getBooleanValue('rightProgressBar'+ i),
    overThumbElement: getBooleanValue('overThumbElement'+ i),
    isVertical: getBooleanValue('isVertical'+ i),
    isScale: getBooleanValue('isScale'+ i),
  }
  rangeSliderNumbersId.forEach(item => {
    let element = document.getElementById(item + i)
    element.addEventListener('blur', () => {
      panel[item] = element.value
      renderRangeSlider(rangeSliderId[i-1], panel)
    })
  })
  rangeSliderBooleansId.forEach(item => {
    let element = document.getElementById(item + i)
    element.addEventListener('change', () => {
      panel[item] = element.checked
      renderRangeSlider(rangeSliderId[i-1], panel)
    })
  })
  renderRangeSlider(rangeSliderId[i-1], panel)

}
