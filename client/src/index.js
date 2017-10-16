import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
// import App from './App';
import { Provider } from 'react-redux'
import { Values } from 'redux-form-website-template'
import store from './store'
import showResults from './showResults'
import InitializeFromStateForm from './InitilaizeFromStateForm'
import 'font-awesome/css/font-awesome.min.css'
const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Initialize From State</h2>
      <InitializeFromStateForm onSubmit={showResults} />
      <Values form="initializeFromState" />
    </div>
  </Provider>,
  rootEl
);

