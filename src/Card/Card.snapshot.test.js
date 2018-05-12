import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

let mockValue = {};

it('renders correctly', () => {
    const tree = renderer
        .create(<Card movie={mockValue} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});