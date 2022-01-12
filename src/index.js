import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// import Main from './views/main/Main';
// import Board from './views/community/Board';
// import Intro from './views/intro/Intro';
 import Header from '.\components\headers\Header'
// import Footer from './components/footers/Footer';

import './assets/style/style.css';
import './assets/style/custom.css';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
        <Routes>
          {/* <Route path='/' element={<Main />}></Route>
          <Route path='/board' element={<Board />}></Route>
          <Route path='/intro' element={<Intro />}></Route>
          <Route path="/*" element={<Main />} /> */}
        </Routes>
      {/* <Footer /> */}
      {/* <Navigate from='*' to='/' /> */}
    </React.StrictMode>
  </BrowserRouter>,
  
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
