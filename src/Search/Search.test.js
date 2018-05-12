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

    /* NOT WORKING... CANNOT TEST ASYNC FETCH */

    // it('triggers fetch data on search button press', async () => {
    //     const fetch = jest.fn().mockImplementation(() => Promise.resolve({mockData: 'mockData'}));
    //     const mockHandler = jest.fn();
    //     const component = mount(
    //         <Search resultsHandler={mockHandler} />
    //     );

    //     let searchControl = component.find('#search');
    //     await searchControl.simulate('click');

    //     expect(fetch).toHaveBeenCalledTimes(1);
    //   });
});

