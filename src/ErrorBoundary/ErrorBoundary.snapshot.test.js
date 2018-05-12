import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from './ErrorBoundary';

it('renders correctly', () => {
    const tree = renderer
        .create(<ErrorBoundary><err>Mock</err></ErrorBoundary>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});