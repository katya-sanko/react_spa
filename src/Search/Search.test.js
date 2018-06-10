// import React from 'react';
// import { mount, render } from 'enzyme';
// import Search from './Search';
// import { Provider } from 'react-redux';

// const store = {
//     subscribe: () => { },
//     dispatch: () => { },
//     getState: () => {}
// };

// const CustomProvider = ({ children }) => {
//     return (
//         <Provider store={store}>
//             {children}
//         </Provider>
//     );
// };

// describe('Search component', () => {
//     it('should be defined', () => {
//         expect(Search).toBeDefined();
//     });

//     it('contains <Search/> Component', () => {
//         const wrapper = mount(
//             <CustomProvider>
//                 <Search />
//             </CustomProvider>
//         );
//         expect(wrapper.find(Search)).to.have.length(1);
//     });

// });

