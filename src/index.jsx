import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import { addTodo } from './redux/actions';

import App from './App';
import reportWebVitals from './reportWebVitals';

store.dispatch(addTodo('Javascript'));
store.dispatch(addTodo('Reactjs'));
store.dispatch(addTodo('Awesome'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
