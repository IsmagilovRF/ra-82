import React from "react";
import "./App.css";
import HookJsonFetch from "./components/HookJsonFetch";

function App() {
  return (
    <div className="App">
      <div className="ui container">
        <div className="ui segments">
          <HookJsonFetch url={process.env.REACT_APP_DATA_URL} />
          <HookJsonFetch url={process.env.REACT_APP_ERROR_URL} />
          <HookJsonFetch url={process.env.REACT_APP_LOADING_URL} />
        </div>
      </div>
    </div>
  );
}

export default App;
