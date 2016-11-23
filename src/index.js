import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import getInventoryItems from './actions/inventoryItemsAction'
import App from './App';


const store = configureStore();

//add inital action below
store.dispatch(getInventoryItems())


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('container')
);


