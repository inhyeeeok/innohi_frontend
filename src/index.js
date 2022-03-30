// These must be the first lines in src/index.js
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Public from './layouts/Public';

import './assets/style/style.css';
import './assets/style/custom.css';

import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import ReactGA from 'react-ga';
const TRACKING_ID = "G-1RE97QE2ZN"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID); 

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>

      <Public />
   
    </React.StrictMode>
  </BrowserRouter>,
  
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
