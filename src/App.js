import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello FlashChat</h1>
      <Router>
        <div className="app_body">
          <Routes>
            <Route exact path="/test" element={<h1>Yo what's up</h1>} />
            <Route path="/" element={<WebcamCapture />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
