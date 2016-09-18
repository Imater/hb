import React from 'react'
import storiesOf from '../../utils/storiesOf'
import Size from '.'

storiesOf('Size')
  .addWithInfo('Show element sizes', () => (
    <Size>
      {
        sizes => <div>{JSON.stringify(sizes)}</div>
      }
    </Size>
  ))

