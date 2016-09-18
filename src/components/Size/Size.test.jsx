import React from 'react'
import { shallow } from 'enzyme'
import Size from '.'

describe('@component Size', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Size />)).to.have.length(1);
  })
  it('should render normal with children content', () => {
    expect(shallow(<Size>Size</Size>).children()).to.be.equal('Size');
  })
});

