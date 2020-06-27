import React from "react";
import "./App.css";
// import "./debug.css";
import "bulma/css/bulma.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "react-modal-video/scss/modal-video.scss";

import RouterX from "./pages/Router";

import { useHistory } from "react-router-dom";

const App = () => {
let history = useHistory();
  
  return (
    <div className="App">
    <RouterX history={history}/>
    </div>
  );
}

export default App;
