import React from 'react'
import { shallow } from 'enzyme'
import AvatarList from '.'

describe('@component AvatarList', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<AvatarList />)).to.have.length(1);
  })
  it('should render normal with children content', () => {
    expect(shallow(<AvatarList>AvatarList</AvatarList>).children()).to.be.equal('AvatarList');
  })
});

