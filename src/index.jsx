import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import { addTodo } from './redux/actions';

import App from './App';
import reportWebVitals from './reportWebVitals';

store.dispatch(addTodo('Jog around the park 3x'));
store.dispatch(addTodo('10 minutes meditation'));
store.dispatch(addTodo('Read for 1 hour'));
store.dispatch(addTodo('Pick up groceries'));
store.dispatch(addTodo('Complete Todo App on Frontend Mentor'));

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
