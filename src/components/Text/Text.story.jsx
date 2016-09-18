import React from 'react'
import storiesOf from '../../utils/storiesOf'
import Text from '.'
import Image from '../Image'

storiesOf('Text')
  .addWithInfo('Default without props', () => (
    <Text />
  ))
  .addWithInfo('Default with children', () => (
    <Text>Text</Text>
  ))
  .addWithInfo('image + text', () => (
    <Image
      height={200}
      width={400}
      url='http://vremena-goda.su/photo/1-0/157_image_154.jpg'
      mode='contain'
      color='blue'
    >
      <Text
        style={{
          color: 'white',
          left: '35%',
          top: '75%'
        }}
      >
        С днём рождения!!!
      </Text>
    </Image>
  ))
  .addWithInfo('image + text', () => (
    <Image
      height={200}
      width={400}
      url='http://vremena-goda.su/photo/1-0/157_image_154.jpg'
      mode='cover'
      color='black'
    >
      <Text
        style={{
          color: 'white',
          left: '35%',
          top: '75%'
        }}
      >
        С днём рождения!!!
      </Text>
    </Image>
  ))
