import React from 'react';
import List from './List';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<List />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});