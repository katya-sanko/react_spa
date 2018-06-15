import React from 'react';
import { mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

function ProblemChild() {
    throw new Error('Error thrown from problem child');
    return <div>Error</div>;
  }

describe('Search component', () => {

    it('should be defined', () => {
        expect(ErrorBoundary).toBeDefined();
    });

    it('should catch errors with componentDidCatch', () => {
        const spy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
        mount(<ErrorBoundary><ProblemChild /></ErrorBoundary>);
        expect(spy).toHaveBeenCalled();
      });
});
