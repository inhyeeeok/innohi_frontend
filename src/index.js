// These must be the first lines in src/index.js
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";

import Public from './layouts/Public';

import './assets/style/style.css';
import './assets/style/custom.css';

import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.min.js';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID; // 발급받은 추적ID를 환경 변수로 불러온다.
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Public />
    </React.StrictMode>
  </BrowserRouter>,
  
  document.getElementById("root")
);

