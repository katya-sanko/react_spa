import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from './Search';

describe('Search component', () => {
    it('should be defined', () => {
        expect(Search).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <Search />
        );
        expect(tree.type()).toEqual('div');
    });

    it('should fetch data', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(fetch.mockResponse(400, 'Test' + ' Error', '{"status":400, "statusText": Test Error!}')));

        const mockHandler = jest.fn();

        const component = mount(
            <Search resultsHandler={mockHandler} />
        );

        let temp = component.find('#search');
        temp.simulate('click');

        console.log('*********************');
        console.log(temp.debug());
        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toBeCalledWith({ username: testValues.username, password: testValues.password });
    });
});

