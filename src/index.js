// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import store from "./store";
// import { RxduxProvider } from "rxdux-state-manager";

// ReactDOM.render(
//   <RxduxProvider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </RxduxProvider>,
//   document.getElementById("root")
// );

// src/index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import store from "./store";
// import { easyStateManager } from "rxdux-state-manager";

// ReactDOM.render(
//   <easyStateManager.Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </easyStateManager.Provider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
