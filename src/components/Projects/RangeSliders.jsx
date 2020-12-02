import React from 'react'
import $ from 'jquery'
import '../../utils/Range-slider/docs/main'
import '../../utils/Range-slider/docs/vendors~main'
import '../../utils/Range-slider/docs/main.css'

class RangeSliders extends React.Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.rangeSlider(this.props.settings)
    }

    // перелистывание карусели
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.$el.empty()
        this.$el.rangeSlider(this.props.settings)
    }

    // другая страница
    componentWillUnmount() {
    }
    render() {
        return <div>
            <div ref={el => this.el = el}/>
        </div>
    }
}

export default RangeSliders
// $(document).ready(function () {
//     $('.slider_first').rangeSlider({
//         min: 0,
//         max: 1000,
//         initialValue: 200,
//         step: 100,
//         isScale: true
//     })
//     $('.slider_second').rangeSlider({
//         min: -400,
//         max: 1000,
//         initialValue: 0,
//         step: 10,
//         rightProgressBar: true,
//         overThumbElement: true
//     })
//     $('.slider_third').rangeSlider({
//         min: 0,
//         max: 1000,
//         initialValue: 200,
//         step: 100,
//         isScale: true
//     })
//     $('.slider_forth').rangeSlider({
//         min: 0,
//         max: 1000,
//         initialValue: 200,
//         step: 100,
//         isScale: true
//     })
// })
