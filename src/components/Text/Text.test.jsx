import React from 'react'
import { shallow } from 'enzyme'
import Text from '.'

describe('@component Text', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Text />)).to.have.length(1);
  })
  it('should render normal with children content', () => {
    expect(shallow(<Text>Text</Text>).children()).to.be.equal('Text');
  })
});

