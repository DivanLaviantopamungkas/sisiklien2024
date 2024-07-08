// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers'; // Pastikan path ini sesuai dengan struktur proyek Anda

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;

