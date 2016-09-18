import React from 'react'
import storiesOf from '../../utils/storiesOf'
import Image from '.'

storiesOf('Image')
  .addWithInfo('Default without props', () => (
    <Image />
  ))
  .addWithInfo('Default with children', () => (
    <Image>Image</Image>
  ))
  .addWithInfo('url1', () => (
    <Image height={200} width={400} url='http://vremena-goda.su/photo/1-0/157_image_154.jpg' />
  ))
  .addWithInfo('url2', () => (
    <Image height={400} width={200} url='https://files1.adme.ru/files/news/part_79/793310/10095010-R3L8T8D-1000-797ab841d30ecf2e893c6ff55e0e067a_970x.jpg' />
  ))
  .addWithInfo('url3', () => (
    <div
      style={{
        width: 600,
        height: 500,
        backgroundColor: 'red'
      }}
    >
      <Image height={'90%'} width={'50%'} url='http://avivas.ru/img/2015/08/topic/41150/cover/0.jpg' />
    </div>
  ))
  .addWithInfo('url cover', () => (
    <Image
      height={200}
      width={400}
      url='http://vremena-goda.su/photo/1-0/157_image_154.jpg'
      mode='cover'
    />
  ))
  .addWithInfo('url contain', () => (
    <Image
      height={200}
      width={400}
      url='http://vremena-goda.su/photo/1-0/157_image_154.jpg'
      mode='contain'
    />
  ))
  .addWithInfo('url contain blue', () => (
    <Image
      height={200}
      width={400}
      url='http://vremena-goda.su/photo/1-0/157_image_154.jpg'
      mode='contain'
      color='blue'
    />
  ))
  .addWithInfo('url contain blue + text', () => (
    <Image
      height={200}
      width={400}
      url='http://vremena-goda.su/photo/1-0/157_image_154.jpg'
      mode='contain'
      color='blue'
    >
      hb
    </Image>
  ))
