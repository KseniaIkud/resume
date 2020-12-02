
import {Form, Styles, ProgressBar, Thumb} from './mvc/subViews.ts'
import {View} from './mvc/view.ts'
import {Model} from './mvc/model.ts'
import {Controller} from './mvc/controller.ts'


(function($: JQueryStatic) {
    $.fn.rangeSlider = function(settings: {
        min?: number
        max?: number
        initialValue?: number
        leftValue?: number
        rightValue?: number
        isRange?: boolean
        rightProgressBar?: boolean
        overThumbElement?: boolean
        step?: number
        isVertical?: boolean
        isScale?: boolean
    }) {
        return new Controller(
            new Model({
                min: settings.min,
                max: settings.max,
                defaultValue: settings.isRange && settings.leftValue || settings.initialValue,
                rightValue: settings.rightValue,
                isRange: settings.isRange,
                rightProgressBar: settings.rightProgressBar,
                overThumbElement: settings.overThumbElement,
                step: settings.step,
                isVertical: settings.isVertical,
                isScale: settings.isScale
            }), 
            new View( 
                this,
                new Form(),
                new Styles(),
                new ProgressBar(),
                new Thumb() 
            )
        )
    }
})(jQuery)

