import React, { Component, PropTypes as pt } from 'react'
import styles from './Size.styl'

class Size extends Component {
  state = {
    sizes: {}
  }

  static propTypes = {
    children: pt.func
  }

  componentDidMount() {
    this.calcWidth()
    window.addEventListener('resize', this.calcWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcWidth);
  }

  calcWidth = () => {
    if (typeof this.element === 'undefined') {
      return;
    }
    const {
      bottom,
      height,
      left,
      right,
      top,
      width
    } = this.element.getBoundingClientRect()
    this.setState({
      sizes: {
        bottom,
        height,
        left,
        right,
        top,
        width
      }
    })
  }

  render() {
    const { sizes } = this.state
    const { children } = this.props
    return (
      <div ref={element => this.element = element}>
        {children(this.state.sizes)}
      </div>
    )
  }
}

export default Size
