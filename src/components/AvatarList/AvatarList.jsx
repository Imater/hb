import React, { PureComponent, PropTypes as pt } from 'react'
import styles from './AvatarList.styl'
import Avatar from '../Avatar'
import Size from '../Size'
import Title from '../Title'

class AvatarList extends PureComponent {

  static propTypes = {
    items: pt.arrayOf(pt.shape({
      avatar72: pt.string,
      id: pt.string
    })),
    size: pt.number,
    margin: pt.number
  }

  static defaultProps = {
    items: [],
    size: 40,
    margin: 10
  }

  renderItem = width => item => {
    const { size } = this.props
    return (
      <div
        key={item.id}
        className={styles.avatarWrapper}
        style={{
          width
        }}
      >
        <Avatar
          url={item.avatar72}
          size={size}
        />
        <div className={styles.comradeName}>
          {item.name}
        </div>
      </div>
    )
  }

  renderList = sizes => {
    const { items, margin, size } = this.props
    const wrapperWidth = (sizes.width - size) / items.length
    const isCompact = wrapperWidth > size + margin
    const width = isCompact ? size + margin : wrapperWidth
    return (
      <div
        className={styles.avatarList}
        style={{
          paddingRight: isCompact ? 0 : this.props.size / 2
        }}
      >
        {items.map(this.renderItem(width))}
      </div>
    )
  }

  render() {
    return (
      <Size>
        { this.renderList }
      </Size>
    )
  }
}

export default AvatarList
