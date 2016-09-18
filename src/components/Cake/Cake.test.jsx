import React from 'react'
import { shallow } from 'enzyme'
import Cake from '.'

describe('@component Cake', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Cake />)).to.have.length(1);
  })
  it('should render normal with children content', () => {
    expect(shallow(<Cake>Cake</Cake>).children()).to.be.equal('Cake');
  })
});

