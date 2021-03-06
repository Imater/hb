import React from 'react'
import storiesOf from '../../utils/storiesOf'
import Cake from '.'

storiesOf('Cake')
  .addWithInfo('Default without props', () => (
    <Cake />
  ))
  .addWithInfo('Default with children', () => (
    <Cake>Cake</Cake>
  ))
  .addWithInfo('1 candle', () => (
    <Cake size={200} count={1} />
  ))
  .addWithInfo('3 candle', () => (
    <Cake size={200} count={3} />
  ))
  .addWithInfo('5 candle', () => (
    <Cake size={200} count={5} />
  ))
  .addWithInfo('7 candle', () => (
    <Cake size={200} count={7} />
  ))
  .addWithInfo('10 candle', () => (
    <Cake size={200} count={10} />
  ))
  .addWithInfo('20 candle', () => (
    <Cake size={200} count={20} />
  ))
  .addWithInfo('100 candle', () => (
    <Cake size={200} count={100} />
  ))
  .addWithInfo('all small cakes', () => {
    const result = []
    for(let i=0; i<=30; i += 1) {
      result.push(
        <div
          style={{
            textAlign: 'center',
            margin: 10
          }}
        >
        <Cake size={40} count={i} />
        </div>
      )
    }
    return result
  })
