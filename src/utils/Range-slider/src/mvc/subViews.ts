class Form {
    form!: HTMLDivElement
    defaultInput!: HTMLInputElement
    rightInput!: HTMLInputElement

    init(parent: HTMLDivElement, isDouble: boolean, min: number, max: number): void {
        this.createForm(parent)
        this.createInput(isDouble)
        this.setMin(isDouble, min)
        this.setMax(isDouble, max)
    }

    createForm(parent: HTMLDivElement): void {
        this.form = <HTMLDivElement>(document.createElement('div'))
        this.form.classList.add('range-slider__form')
        parent.append(this.form)
    }
    
    createInput(isDouble: boolean): void {
        if (isDouble) {
            this.defaultInput = document.createElement('input')
            this.defaultInput.type = 'range'
            this.defaultInput.classList.add('range-slider__input') 
            this.defaultInput.classList.add('range-slider__input_left')
            this.form.append(this.defaultInput)
            
            this.rightInput = document.createElement('input')
            this.rightInput.type = 'range'
            this.rightInput.classList.add('range-slider__input')
            this.rightInput.classList.add('range-slider__input_right')
            this.form.append(this.rightInput)

        } else {
            this.defaultInput = document.createElement('input')
            this.defaultInput.type = 'range'
            this.defaultInput.classList.add('range-slider__input')
            this.form.append(this.defaultInput)
        }
    }
    setInputValue(isDouble: boolean, value: number, rightValue: number = NaN): void {
        this.defaultInput.value = String(value)
        if (isDouble) {   
            this.rightInput.value = String(rightValue)
        }
    }
    setMin(isDouble: boolean, min: number): void {
        this.defaultInput.min = String(min)
        if (isDouble) {
            this.rightInput.min = String(min)
        }
    }
    setMax(isDouble: boolean, max: number = 100): void {
        this.defaultInput.max = String(max)
        if (isDouble) {
            this.rightInput.max = String(max)
        }
    }
}

class Styles {
    style!: HTMLDivElement
    track!: HTMLDivElement

    init(parent: HTMLDivElement) {
        this.createStyles(parent)
        this.createTrack()
    }
    
    createStyles(parent: HTMLDivElement): void {
        this.style = document.createElement('div')
        this.style.classList.add('range-slider__style')
        parent.append(this.style)
    }
    
    createTrack(): void {
        this.track = document.createElement('div')
        this.track.classList.add('range-slider__track')
        this.style.append(this.track)
    }
}

class ProgressBar {
    bar!: HTMLDivElement
    createProgressBar(parent: HTMLDivElement): void {
        this.bar = document.createElement('div')
        this.bar.classList.add('range-slider__progress-bar')
        parent.append(this.bar)
    }
    calcPercent(value: number, min: number, max: number): number {
        return ((value - min) / (max - min)) * 100
    }
    setDefault(isDouble: boolean, percent: number, percentRight: number = NaN): void {
        if (isDouble) {
            this.bar.style.left = percent + '%'
            this.bar.style.right = (100 - percentRight) + '%'
        } else {
            this.bar.style.right = (100 - percent) + '%'
            this.bar.style.left = String(0)
        }
    }
    setRight(isDouble: boolean, percent: number): void {
        if (!isDouble) {
            this.bar.style.left = percent + '%'
            this.bar.style.right = String(-1) + 'px'
        }
    }
}

class Thumb {

    thumbDefault!: HTMLDivElement
    thumbRight!: HTMLDivElement
    thumbOutput!: HTMLDivElement
    thumbOutputRight?: HTMLDivElement

    init (parent: HTMLDivElement, 
        isDouble: boolean, 
        toggleElement: boolean, 
        defaultValue: number, 
        rightValue?: number) {

        this.createThumb(parent, isDouble)
        if (toggleElement) {
            this.createThumbElement(isDouble, this.thumbDefault, this.thumbRight)
            this.setThumbValue(isDouble, defaultValue, rightValue)
        }
    }
    createThumb(parent: HTMLDivElement, isDouble: boolean) {
        if(isDouble) {
            this.thumbDefault = document.createElement('div')
            this.thumbDefault.classList.add('range-slider__thumb')
            this.thumbDefault.classList.add('range-slider__thumb_left')
            parent.append(this.thumbDefault)

            this.thumbRight = document.createElement('div')
            this.thumbRight.classList.add('range-slider__thumb')
            this.thumbRight.classList.add('range-slider__thumb_right')
            parent.append(this.thumbRight)

        } else {
            this.thumbDefault = document.createElement('div')
            this.thumbDefault.className = 'range-slider__thumb'
            parent.append(this.thumbDefault)

            
        }
    }
    createThumbElement(isDouble: boolean, parent: HTMLDivElement, rightParent?: HTMLDivElement) {
        if (isDouble) {
            this.thumbOutputRight = document.createElement('p')
            this.thumbOutputRight.classList.add('range-slider__value-thumb')
            rightParent!.append(this.thumbOutputRight)
        }
        this.thumbOutput = document.createElement('p')
        this.thumbOutput.className = 'range-slider__value-thumb'
        parent.append(this.thumbOutput)
    }
    setThumbValue(isDouble: boolean, value: number, rightValue?: number) {
        this.thumbOutput.textContent = String(value)
        if (isDouble) {
            this.thumbOutputRight!.textContent = String(rightValue)
        }
        
        
    }

    placeThumb(isDouble: boolean, percent: number, percentRight: number = NaN): void {
        this.thumbDefault.style.left = percent + '%'
        if (isDouble) {
            this.thumbRight.style.right = (100 - percentRight) + '%'
        }
    }
}

export {Form, Styles, ProgressBar, Thumb}