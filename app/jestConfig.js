import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchPolyfill from 'jest-fetch-mock';
//import whatwgFetch from 'whatwg-fetch-importable'

global.fetch = fetchPolyfill;


console.log('fetchMock', global.fetch);

// global.fetch = whatwgFetch;

configure({ adapter: new Adapter() });