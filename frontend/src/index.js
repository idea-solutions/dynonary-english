import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './utils/index.scss';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { gapi } from 'gapi-script';
gapi.load('client:auth2', () => {
  gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      plugin_name: 'chat',
  });
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
