import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";


const initialState = {
    counter:{
        value: 0
    },
    users:[]
}


const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'INC_CUSTOM':{
            return {
                ...state,
                counter:{
                    value: action.payload
                }
            }
        }
        case 'DEC':{
            return {
                ...state,
                counter:{
                    value: action.payload
                }
            }
        }
        case 'RESET':{
            return {
                ...state,
                counter:{
                    value: 0
                }
            }
        }
        case 'ADD_USERS':{
            return {
                ...state,
                users: action.payload
            }
        }
        default:
            return state
    }
}

const store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />

      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
