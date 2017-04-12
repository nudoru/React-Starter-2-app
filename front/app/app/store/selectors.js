import {memoize} from 'ramda';

// This one may not be useful since config is injected into page components via
// Redux's connect. But it serves as an example of the approach
export const configSelector = memoize(state => state.config);