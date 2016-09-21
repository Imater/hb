import React from 'react'
import storiesOf from '../../utils/storiesOf'
import Slider from '.'
import Text from '../Text'
import Image from '../Image'
import stateDecorator from '../../helpers/decorators/stateDecorator.jsx'

const slides = [
  {
    url: 'http://s.kinoprofi.net/s/2016-04/1461775436_strazhi-galaktiki-1.jpg',
    text: 'Привет зелёный свистун!',
    textStyle: {
      fontSize: 30,
      color: 'red'
    }
  },
  {
    url: 'http://www.kinomania.ru/images/wallpapers_film/w1920x1080_15322.jpg',
    text: 'С днём рождения ракета!'
  },
  {
    url: 'https://i.ytimg.com/vi/p7VRUK7ctmU/maxresdefault.jpg',
    text: 'Пока ракета, много не пей'
  },
  {
    url: 'https://www.film.ru/sites/default/files/movies/frames/Guardians_of_the_Galaxy_59.jpg',
    text: 'А ты злодей, держись подальше',
    textStyle: {
      top: '5%',
      left: '10%',
      fontSize: 40,
      color: 'white'
    }
  }
]

const elementSlides = slides.map(item => (
  <Image height='100%' width='100%' url={item.url}>
    <Text
      style={{
        color: 'white',
        left: '35%',
        top: '75%',
        ...item.textStyle
      }}
    >
      {item.text}
    </Text>
  </Image>
))

const DecoratedSlider = stateDecorator('current', 0)(Slider)

storiesOf('Slider')
  .addWithInfo('Default without props', () => (
    <Slider />
  ))
  .addWithInfo('Default with children', () => (
    <Slider>Slider</Slider>
  ))
  .addWithInfo('horizontal slider', () => (
    <div
      style={{
        width: 800,
        height: 500
      }}
    >
      <DecoratedSlider
        current={0}
        direction='horizontal'
        slides={elementSlides}
      />
    </div>
  ))
  .addWithInfo('vertical slider', () => (
    <div
      style={{
        width: 800,
        height: 500
      }}
    >
      <DecoratedSlider
        current={0}
        direction='vertical'
        slides={elementSlides}
      />
    </div>
  ))
