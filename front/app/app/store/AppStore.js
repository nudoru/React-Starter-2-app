import { createStore } from 'redux';
import DefaultReducer from './DefaultReducer';

const AppStore = createStore(DefaultReducer);

export default AppStore;