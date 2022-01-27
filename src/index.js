// These must be the first lines in src/index.js
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Main from './views/main/Main';

import Intro from './views/intro/Intro';


import Board from './views/community/Board';
import Contest from './views/insight/Contest';
import StartupArchive from './views/community/StartupArchive';


import StartupSourcing from './views/program/StartupSourcing';
import ExternalCooperation from './views/program/ExternalCooperation';
import Suggestion from './views/program/Suggestion';

import Member from './views/contact/Member'

import ErrorPage from './views/common/ErrorPage';

import Header from './components/header/Header'
import Footer from './components/footer/Footer';

import './assets/style/style.css';
import './assets/style/custom.css';

import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>

          <Route exact path='/intro' element={<Intro />}></Route>

          <Route exact path='/program/startup' element={<StartupSourcing />}></Route>
          <Route exact path='/program/external' element={<ExternalCooperation />}></Route>
          <Route exact path='/program/suggest' element={<Suggestion />}></Route>

          <Route exact path='/insight/biz' element={<Board />}></Route>
          <Route exact path='/insight/tech' element={<Board />}></Route>
          <Route exact path='/insight/contest' element={<Contest />}></Route>

          <Route exact path='/contact/member' element={<Member />}></Route>
          <Route exact path='/contact/question' element={<StartupArchive />}></Route>

          <Route path="/*" element={<ErrorPage />} />

        </Routes>
      <Footer />
      {/* <Navigate from='*' to='/' /> */}
    </React.StrictMode>
  </BrowserRouter>,
  
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
