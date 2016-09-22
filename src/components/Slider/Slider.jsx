import React, { PureComponent, PropTypes as pt } from 'react'
import cx from 'classnames'
import styles from './Slider.styl'

class Slider extends PureComponent {

  state = {
    offset: 0
  }

  static propTypes = {
    slides: pt.arrayOf(pt.node),
    current: pt.number,
    onChange: pt.func,
    direction: pt.oneOf(['vertical', 'horizontal']),
    isKeyActive: pt.bool,
    isLoop: pt.bool
  }

  static defaultProps = {
    slides: [],
    direction: 'horizontal',
    isKeyActive: true,
    isLoop: false
  }

  generateNumberKeysFn = initKeys => {
    const keys = {
      Digit0: this.setCurrent.bind(this, 0),
      ...initKeys
    }
    for (let index = 1; index <= 9; index += 1) {
      keys[`Digit${index}`] = this.setCurrent.bind(this, index - 1)
    }
    return keys
  }

  handleKey = event => {
    const keys = this.generateNumberKeysFn({
      ArrowLeft: this.handleLeftClick,
      ArrowUp: this.handleLeftClick,
      PageUp: this.handleLeftClick,
      KeyH: this.handleLeftClick,
      KeyK: this.handleLeftClick,
      KeyJ: this.handleRightClick,
      KeyL: this.handleRightClick,
      Space: this.handleRightClick,
      ArrowRight: this.handleRightClick,
      ArrowDown: this.handleRightClick,
      PageDown: this.handleRightClick,
      Home: this.setCurrentFirst,
      End: this.setCurrentLast
    })
    const fn = keys[event.code]
    if (typeof fn !== 'undefined') {
      fn()
    }
  }

  componentDidMount() {
    const { isKeyActive } = this.props
    if (isKeyActive) {
      window.addEventListener('keydown', this.handleKey)
    }
  }

  componentWillUnmount() {
    const { isKeyActive } = this.props
    if (isKeyActive) {
      window.removeEventListener('keydown', this.handleKey)
    }
  }

  renderSlide = (element, index) => (
    <div
      className={styles.slideWrapper}
      key={index}
    >
      {element}
    </div>
  )

  shake = index => {
    this.setState({
      offset: index < 0 ? -30 : 30
    })
    setTimeout(() => {
      this.setState({
        offset: 0
      })
    }, 200)
  }

  setCurrent = index => {
    const { onChange, slides } = this.props
    if (index >= 0 && index < slides.length) {
      onChange(index)
    } else {
      this.shake(index)
    }
  }

  setCurrentFirst = () => {
    this.setCurrent(0)
  }

  setCurrentLast = () => {
    const { slides } = this.props
    this.setCurrent(slides.length - 1)
  }

  handleLeftClick = () => {
    const { current, slides, isLoop } = this.props
    const nextCurrent = current === 0 && isLoop ? slides.length - 1 : current - 1
    this.setCurrent(nextCurrent)
  }

  handleRightClick = () => {
    const { current, slides, isLoop } = this.props
    const nextCurrent = slides.length - 1 === current && isLoop ? 0 : current + 1
    this.setCurrent(nextCurrent)
  }

  render() {
    const { current, slides, direction } = this.props
    const { offset } = this.state
    const marginLeft = -(current * 100 + offset)
    const translateDirection = direction === 'horizontal' ? 'translateX' : 'translateY'
    return (
      <div className={styles.Slider}>
        <div
          className={cx({
            [styles.slidesWrapperHorizontal]: direction === 'horizontal',
            [styles.slidesWrapperVertical]: direction === 'vertical'
          })
          }
          style={{
            transform: `${translateDirection}(${marginLeft}%)`
          }}
        >
          {slides.map(this.renderSlide)}
        </div>
        <button
          className={styles.arrowLeft}
          onClick={this.handleLeftClick}
        />
        <button
          className={styles.arrowRight}
          onClick={this.handleRightClick}
        />
      </div>
    )
  }
}

export default Slider
