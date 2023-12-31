import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Componints/Validation/Login";
import Register from "./Componints/Validation/Register";
import Home from "./Componints/Home";
function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
