import React, { PureComponent, PropTypes as pt } from 'react'
import classes from './Avatar.styl'

class Avatar extends PureComponent {

  static propTypes = {
    url: pt.string,
    size: pt.number
  }

  static defaultProps = {
    size: 80
  }

  render() {
    const { url, size } = this.props
    return (
      <div
        className={classes.avatar}
        style={{
          backgroundImage: `url(${url})`,
          width: size,
          height: size
        }}
      />
    )
  }
}

export default Avatar
