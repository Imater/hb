import React from 'react'
import { shallow } from 'enzyme'
import Image from '.'

describe('@component Image', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Image />)).to.have.length(1);
  })
  it('should render normal with children content', () => {
    expect(shallow(<Image>Image</Image>).children()).to.be.equal('Image');
  })
});

