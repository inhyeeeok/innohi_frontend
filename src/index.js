import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./views/Main";
import Header from "./components/Headers/Header";
import Footer from "./components/Footers/Footer";
import reportWebVitals from "./reportWebVitals";
import test from "./components/Test";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
test();
