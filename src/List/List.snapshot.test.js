import React from 'react';
import List from './List';
import renderer from 'react-test-renderer';

const mockMovies = [];

it('renders correctly', () => {
    const tree = renderer
        .create(<List movies={mockMovies}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});