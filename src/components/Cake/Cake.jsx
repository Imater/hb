import React, { PureComponent, PropTypes as pt } from 'react'
import styles from './Cake.styl'

const MAX_COUNT = 25

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
    const { size } = this.props
    const candles = []
    const margin = ((((100 - (count)) / count) / 2) * 0.6)
    const candleWidth = (width - (margin * count)) / count / 2
    const maxCandleWidth = candleWidth > size / 10 ? size / 10 : candleWidth
    for (let index = 0; index < count; index += 1) {
      candles.push(
        <div
          className={styles.candle}
          key={index}
          style={{
            marginLeft: `${margin}%`,
            marginRight: `${margin}%`,
            width: maxCandleWidth
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
    const maxCount = count <= MAX_COUNT ? count : MAX_COUNT
    const radius = size / 10
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

        <div
          className={styles.cream}
          style={{
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius
          }}
        />
        <div className={styles.layerTop} />
        <div className={styles.layerBottom} />
        <div
          className={styles.dish}
          style={{
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius
          }}
        />
      </div>
    )
  }
}

export default Cake
