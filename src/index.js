import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const reduxState = {
  counter : 100
}

const mainReducer = (state=reduxState, action) => {

  if (action.type === "DITAMBAH"){
    return {...state,counter:state.counter+1}
  }

  return state;

}

const storeRedux = createStore(mainReducer);


ReactDOM.render(
  <Provider store={storeRedux}> 
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
