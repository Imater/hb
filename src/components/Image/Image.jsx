import React, { PureComponent, PropTypes as pt } from 'react'
import styles from './Image.styl'

class Image extends PureComponent {

  static propTypes = {
    height: pt.oneOfType([pt.number, pt.string]),
    width: pt.oneOfType([pt.number, pt.string]),
    children: pt.oneOfType([pt.node, pt.arrayOf(pt.node)]),
    url: pt.string,
    mode: pt.string,
    color: pt.string
  }

  static defaultProps = {
    height: '100%',
    width: '100%',
    mode: 'cover',
    color: 'black'
  }

  render() {
    const { height, width, url, mode, color, children } = this.props
    return (
      <div
        className={`${styles.Image} ${styles[mode]}`}
        style={{
          width,
          height,
          backgroundImage: `url(${url})`,
          backgroundColor: color
        }}
      >
        {children}
      </div>
    )
  }
}

export default Image
