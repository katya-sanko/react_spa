import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

it('should return a <div />', () => {
    const tree = shallow(<List />);
    expect(tree.type()).toEqual('div');
});
