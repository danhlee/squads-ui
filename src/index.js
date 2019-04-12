import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App";
import squadsStore from './redux/store';

window.store = squadsStore;

ReactDOM.render(
  <Provider store={squadsStore} >
    <App />
  </Provider>
  ,
  document.getElementById("root"));