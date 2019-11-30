import { createStore } from 'redux';
import reducer from './reducers';

export function configureStore() {
    const store = createStore(reducer);
    return store;
}