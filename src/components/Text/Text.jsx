import React, { PureComponent, PropTypes as pt } from 'react'
import styles from './Text.styl'

class Text extends PureComponent {

  static propTypes = {
    style: pt.object,
    children: pt.string
  }

  render() {
    const { style, children } = this.props
    return (
      <div
        className={styles.Text}
        style={style}
      >
        {children}
      </div>
    )
  }
}

export default Text
