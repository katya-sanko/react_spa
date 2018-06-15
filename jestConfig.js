import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Body, Headers, Request, Response, fetch } from './polyfills/fetch.js';

global.Body = Body;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.fetch = fetch;

configure({ adapter: new Adapter() });
