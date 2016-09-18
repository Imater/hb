import React, { PureComponent, PropTypes as pt } from 'react'
import styles from './Cake.styl'

class Cake extends PureComponent {

  static propTypes = {
    count: pt.number,
    size: pt.number
  }

  static defaultProps = {
    count: 1,
    size: 80
  }
  renderAllCandles = (width, count) => {
    const candles = []
    const margin = (((width - (count * 30)) / count) / 2) * 0.8
    for (let index = 0; index < count; index += 1) {
      candles.push(
        <div
          className={styles.candle}
          key={index}
          style={{
            marginLeft: margin,
            marginRight: margin
          }}
        >
          <div className={styles.flame} />
          <div className={styles.stick} />
        </div>
      )
    }
    return candles
  }

  render() {
    const { count, size } = this.props
    const maxCount = count <= 15 ? count : 15
    const width = size + (size * maxCount * 0.2)
    const height = size

    return (
      <div className={styles.Cake} style={{
        width : width,
        height: height
      }}>
        <div className={styles.candles}>
          {this.renderAllCandles(width, maxCount)}
        </div>

        <div className={styles.cream} />
        <div className={styles.layerTop} />
        <div className={styles.layerBottom} />
        <div className={styles.dish} />
      </div>
    )
  }
}

export default Cake
