import React, { PureComponent, PropTypes as pt } from 'react'
import styles from './Slider.styl'

class Slider extends PureComponent {

  static propTypes = {
    slides: pt.array,
    current: pt.number,
    onChange: pt.func
  }

  static defaultProps = {
    slides: []
  }

  renderSlide = element => (
    <div className={styles.slideWrapper}>
      {element}
    </div>
  )

  handleLeftClick = () => {
    const { onChange, current, slides } = this.props
    const nextCurrent = current === 0 ? slides.length - 1 : current - 1
    onChange(nextCurrent)
  }

  handleRightClick = () => {
    const { onChange, current, slides } = this.props
    const nextCurrent = slides.length - 1 === current ? 0 : current + 1
    onChange(nextCurrent)
  }

  render() {
    const { current, slides } = this.props
    const marginLeft = -(current * 100)
    return (
      <div className={styles.Slider}>
        <div
          className={styles.slidesWrapper}
          style={{
            transform: `translateX(${marginLeft}%)`
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
