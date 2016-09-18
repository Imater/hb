import React, { PureComponent, PropTypes as pt } from 'react'
import styles from './<%= pascalEntityName %>.styl'

class <%= pascalEntityName %> extends PureComponent {

  static propTypes = {

  }

  render() {
    return (
      <div className={styles.<%= pascalEntityName %>}>
        <h1><%= pascalEntityName %></h1>
      </div>
    )
  }
}

export default <%= pascalEntityName %>
