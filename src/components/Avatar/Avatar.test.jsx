import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '.';

describe('@component Avatar', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Avatar />)).to.have.length(1);
  });
  it('should render normal with children content', () => {
    expect(shallow(<Avatar>Avatar</Avatar>).children()).to.be.equal('Avatar');
  });
});

