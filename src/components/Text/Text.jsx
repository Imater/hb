import React, { PureComponent, PropTypes as pt } from 'react'
import styles from './Text.styl'

class Text extends PureComponent {

  static propTypes = {
    text: pt.string,
    color: pt.string,
    left: pt.string,
    top: pt.string
  }

  render() {
    const { text, color, left, top } = this.props
    return (
      <div
        className={styles.Text}
        style={{
          color: color,
          left: left,
          top: top
        }}
      >
        {text}
      </div>
    )
  }
}

export default Text
