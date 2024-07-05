import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.js";
import Actual from "./pages/Actual";
import Archive from "./pages/Archive";
import Admin from "./pages/Admin";
import ArchiveAccessWrapper from './components/wrappers/ArchiveAccessWrapper.js';
import SportWrapper from './components/wrappers/SportWrapper.js';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={<Home />}
          />
          <Route
            exact path="/actual"
            element={<Actual />}
          />
          <Route
            exact path="/archive"
            element={<Archive />}
          />
          <Route
            exact path="/admin"
            element={<Admin />}
          />
          <Route
            exact path={`/actual/:id`}
            element={<SportWrapper />}
          />
          <Route
            exact path={`/archive/:id`}
            element={<ArchiveAccessWrapper />}
          />
          <Route
            exact path={`/archive/:year/:id`}
            element={<SportWrapper />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
