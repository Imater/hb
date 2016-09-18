import React from 'react'
import storiesOf from '../../utils/storiesOf'
import Avatar from '.'

storiesOf('Avatar')
  .addWithInfo('Default without props', () => (
    <Avatar />
  ))
  .addWithInfo('With image from net 40px', () => (
    <Avatar
      url='https://avatars.slack-edge.com/2016-07-04/56602685841_dea98f6d23b94eff633c_192.jpg'
      size={40}
    />
  ))
  .addWithInfo('With image from net 80px', () => (
    <Avatar
      url='https://avatars.slack-edge.com/2016-07-04/56602685841_dea98f6d23b94eff633c_192.jpg'
      size={80}
    />
  ))
  .addWithInfo('With image from net 400px', () => (
    <Avatar
      url='https://avatars.slack-edge.com/2016-07-04/56602685841_dea98f6d23b94eff633c_192.jpg'
      size={400}
    />
  ))
