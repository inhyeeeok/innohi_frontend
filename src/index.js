// These must be the first lines in src/index.js
import 'react-app-polyfill/ie9'; 
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

 import Main from './views/main/Main';
 import Board from './views/community/Board';
 import Intro from './views/intro/Intro';
 import Event from './views/event/Event';
 import Dfs from './views/program/Dfs';
 import Startup from './views/program/StartupArchive';
 import ErrorPage from './views/common/ErrorPage';

 import Header from './components/header/Header'
 import Footer from './components/footer/Footer';

import './assets/style/style.css';
import './assets/style/custom.css';

import 'bootstrap/dist/js/bootstrap.js'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route exact path='/board' element={<Board />}></Route>
          <Route exact path='/intro' element={<Intro />}></Route>
          <Route exact path='/event' element={<Event />}></Route>
          <Route exact path='/dfs' element={<Dfs />}></Route>
          <Route exact path='/startup' element={<Startup />}></Route>
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
