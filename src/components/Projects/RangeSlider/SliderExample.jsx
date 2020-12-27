import React from 'react'
import $ from 'jquery'
import '../../../utils/Range-slider/docs/main'
import '../../../utils/Range-slider/docs/vendors~main'
import '../../../utils/Range-slider/docs/main.css'

class SliderExample extends React.Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.rangeSlider(this.props.settings)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.$el.empty()
        this.$el.rangeSlider(this.props.settings)
    }
    componentWillUnmount() {
    }
    render() {
        return <div>
            <div ref={el => this.el = el}/>
        </div>
    }
}

export default SliderExample