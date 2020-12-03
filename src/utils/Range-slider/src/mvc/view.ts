
import {Form, Styles, ProgressBar, Thumb} from './subViews'

interface IDataView {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
    overThumbElement: boolean
    isVertical: boolean
    isScale: boolean
    scaleValues: number[]
}
interface IObserverView {
    updateModel(arg0: string, arg1: number): void
}

class View {
    parent: HTMLElement
    wrapper!: HTMLDivElement
    singleInput?: HTMLInputElement
    leftInput?: HTMLInputElement
    rightInput?: HTMLInputElement
    form: Form
    styles: Styles
    progressBar: ProgressBar
    thumb: Thumb
    options: IDataView
    observers: IObserverView[]
    constructor(parent: HTMLElement, form: Form, styles: Styles, progressBar: ProgressBar, thumb: Thumb) {
        this.parent = parent
        this.form = form
        this.styles = styles
        this.progressBar = progressBar
        this.thumb = thumb

    // default data
        this.options = {
            min: 0,
            max: 100,
            defaultValue: 10,
            rightValue: 50,
            isRange: true,
            rightProgressBar: false,
            overThumbElement: true,
            isVertical: false,
            isScale: false,
            scaleValues: []
        }

        this.observers = []
    }
    subscribe(observer: IObserverView) {
        this.observers.push(observer)
    }
    
    init = () => {
        this.createWrapper()
        
        this.form.init(
            this.wrapper, 
            this.options.isRange, 
            this.options.min, 
            this.options.max
        )
        this.styles.init(this.wrapper)
        this.progressBar.createProgressBar(this.styles.style)
        this.thumb.init(
            this.styles.style,
            this.options.isRange,
            this.options.overThumbElement,
            this.options.defaultValue,
            this.options.rightValue
        )
        
        this.setInput()
        this.eventInput()
        this.progressBar.bar.onmousedown = elem => {
            this.clickOnBar(elem)
        }
        this.styles.track.onmousedown = elem => {
            this.clickOnBar(elem)
        }
        this.eventHover()
        this.eventActive()



        if(this.options.isVertical) {
            this.wrapper.classList.add('range-slider_vertical')
            if(this.options.overThumbElement) {
                this.thumb.thumbOutput.classList.add('range-slider__value-thumb_vertical')
                this.thumb.thumbOutputRight?.classList.add('range-slider__value-thumb_vertical')
            }   
        }
        if (this.options.isScale) {
            this.createScale()
        }
        this.createInputs()
    } 
    createWrapper = () => {
        this.wrapper = document.createElement('div')
        this.wrapper.classList.add('range-slider')
        this.parent.append(this.wrapper)
    }
    createScale = () => {
        let scale = document.createElement('div')
        scale.classList.add('range-slider__scale')
        this.wrapper.append(scale, this.styles.style)

        for (let i = 0; i < this.options.scaleValues.length; i++) {
            const divValue: HTMLDivElement = document.createElement('div')
            divValue.classList.add('range-slider__value')
            const value: number = this.options.scaleValues[i]
            divValue.textContent = String('– ' + value)
            scale.append(divValue)
            const min = this.options.min
            const max = this.options.max
            const percent: number = Math.round(((value - min) / (max - min)) * 100)
            divValue.style.left = percent + '%'

            divValue.addEventListener('click', () => {
                this.eventClick(value)
            })
            divValue.style.marginLeft = '-' + this.placeScale() + '%'
        }
    }
    placeScale = (): number => {
        const containerWidth: number = this.wrapper.offsetWidth
        return (0.42 * containerWidth + 777.8) / containerWidth
    }
    createInputs = () => {
        if (this.options.isRange) {
            let leftInput = document.createElement('input')
            leftInput.classList.add('range-slider__window-value')
            leftInput.placeholder = 'left value'
            leftInput.value = String(this.options.defaultValue)
            this.leftInput = leftInput
            this.wrapper.append(this.leftInput)

            let rightInput = document.createElement('input')
            rightInput.classList.add('range-slider__window-value', 'range-slider__window-value_right')
            rightInput.placeholder = 'right value'
            rightInput.value = String(this.options.rightValue)
            this.rightInput = rightInput
            this.wrapper.append(this.rightInput)

        } else {
            let singleInput = document.createElement('input')
            singleInput.classList.add('range-slider__window-value')
            singleInput.placeholder = 'value'
            singleInput.value = String(this.options.defaultValue)
            this.singleInput = singleInput
            this.wrapper.append(this.singleInput)
        }
    }
    setInput = () => {
        this.form.setInputValue(this.options.isRange, this.options.defaultValue, this.options.rightValue)
        const placeDefault: number = this.progressBar.calcPercent(
                    Number(this.form.defaultInput.value), 
                    Number(this.form.defaultInput.min), 
                    Number(this.form.defaultInput.max))

        const placeRight: number = this.form.rightInput ? 
            this.progressBar.calcPercent(
                Number(this.form.rightInput.value), 
                Number(this.form.rightInput.min), 
                Number(this.form.rightInput.max)) 
                : NaN

        this.progressBar.setDefault(this.options.isRange, placeDefault, placeRight)
        if (this.options.rightProgressBar) { 
            this.progressBar.setRight(this.options.isRange, placeDefault) 
        }
        this.thumb.placeThumb(this.options.isRange, placeDefault, placeRight)
    }
    eventInput = () => {
        this.form.defaultInput.addEventListener('input', () => {
            this.options.defaultValue = Number(this.form.defaultInput.value)
            this.setInput()
            this.observers.forEach(observer => {
                observer.updateModel('default', Number(this.form.defaultInput.value))
            })
            this.thumb.setThumbValue(this.options.isRange, 
                this.options.defaultValue, this.options.rightValue)
            if (this.options.isRange) {
                this.leftInput!.value = String(this.options.defaultValue)
            } else {
                this.singleInput!.value = String(this.options.defaultValue)
            }
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('input', () => {
                this.options.rightValue = Number(this.form.rightInput.value)
                this.setInput()
                this.observers.forEach(observer => {
                    observer.updateModel('right', Number(this.form.rightInput.value))
                })
                this.thumb.setThumbValue(this.options.isRange, 
                    this.options.defaultValue, this.options.rightValue)
                this.rightInput!.value = String(this.options.rightValue)
            })
        }
    }
    
    clickOnBar(elem: MouseEvent) {
        const coords: DOMRect = this.styles.track.getBoundingClientRect()
        let length: number = coords.right - coords.left
        let range: number = this.options.max - this.options.min
        let currentPosition: number = elem.pageX - coords.left
        let percent: number

        if (this.options.isVertical) {
            currentPosition = elem.pageY - coords.top
            length = coords.bottom - coords.top
            if (length < currentPosition) {
                currentPosition = length
            }
        }
        percent = currentPosition/length * 100
        const newValue: number = Math.round(this.options.min + ((range) * percent) / 100)
        this.eventClick(newValue)
    }
    eventClick(newValue: number) {
        const halfOfBar: number = (this.options.rightValue + this.options.defaultValue) / 2 
        const isRightTrack: boolean = this.options.isRange && newValue > this.options.rightValue 
        const isRightBar = this.options.isRange && newValue > halfOfBar 
        if(isRightTrack || isRightBar) {
            this.options.rightValue = newValue
            this.setInput()
            this.observers.forEach(observer => {
                observer.updateModel('right', newValue)
            })
            this.thumb.setThumbValue(this.options.isRange, 
                this.options.defaultValue, this.options.rightValue)
        } else {
            this.options.defaultValue = newValue
            this.setInput()
            this.observers.forEach(observer => {
                observer.updateModel('default', newValue)
            })
            this.thumb.setThumbValue(this.options.isRange, 
                this.options.defaultValue, this.options.rightValue)
        }
    }
    eventHover = () => {
        this.form.defaultInput.addEventListener('mouseover', () => {
            if (this.options.overThumbElement) {
                this.thumb.thumbOutput.classList.add('range-slider__value-thumb_big')
            }
            this.thumb.thumbDefault.classList.add('range-slider__thumb_hover')
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('mouseover', () => {
                if (this.options.overThumbElement) {
                    this.thumb.thumbOutputRight?.classList.add('range-slider__value-thumb_big')
                }
                this.thumb.thumbRight.classList.add('range-slider__thumb_hover')
            })

        }

        this.form.defaultInput.addEventListener('mouseout', () => {
            if (this.options.overThumbElement) {
                this.thumb.thumbOutput.classList.remove('range-slider__value-thumb_big')
            }
            this.thumb.thumbDefault.classList.remove('range-slider__thumb_hover')
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('mouseout', () => {
                if (this.options.overThumbElement) {
                    this.thumb.thumbOutputRight?.classList.remove('range-slider__value-thumb_big')
                }
                this.thumb.thumbRight.classList.remove('range-slider__thumb_hover')
            })
        }
    }
    eventActive = () => {
        this.form.defaultInput.addEventListener('mousedown', () => {
            this.thumb.thumbDefault.classList.add('range-slider__thumb_active')
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('mousedown', () => {
                this.thumb.thumbRight.classList.add('range-slider__thumb_active')
            })
        }

        this.form.defaultInput.addEventListener('mouseup', () => {
            this.thumb.thumbDefault.classList.remove('range-slider__thumb_active')
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('mouseup', () => {
                this.thumb.thumbRight.classList.remove('range-slider__thumb_active')
            })
        }
    }
}

export {View}