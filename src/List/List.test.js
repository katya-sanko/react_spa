import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

const mockMovies = [];

it('should return a <div />', () => {
    const tree = shallow(<List movies={mockMovies}/>);
    expect(tree.type()).toEqual('div');
});
