import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";

const AppRouter = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"About Us"} />
          <Route path="/faq" element={"FAQ"} />
        </Routes>
      </p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </header>
  );
};

export default AppRouter;
