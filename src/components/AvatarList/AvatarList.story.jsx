import React from 'react'
import storiesOf from '../../utils/storiesOf'
import AvatarList from '.'
import comrades from './comrades'

storiesOf('AvatarList')
  .addWithInfo('Default without props', () => (
    <AvatarList />
  ))
  .addWithInfo('list with many comrades', () => (
    <AvatarList size={40} items={comrades} />
  ))
  .addWithInfo('list with medium list comrades', () => (
    <AvatarList size={40} items={comrades.slice(0,30)} />
  ))
  .addWithInfo('list with small list comrades', () => (
    <AvatarList size={40} items={comrades.slice(0,3)} />
  ))
  .addWithInfo('list with medium list comrades 50%', () => (
    <div style={{width: '50%', marginLeft: '50%'}}>
      <AvatarList size={40} items={comrades.slice(0,15)} />
    </div>
  ))
