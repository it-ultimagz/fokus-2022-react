import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Film, Inpus, Rokok } from "./components";
import logo from "./logo.svg";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={"Home"} />
      <Route path="/about" element={"About Us"} />
      <Route path="/faq" element={"FAQ"} />
      <Route path="/film" element={<Film />} />
      <Route path="/inpus" element={<Inpus />} />
      <Route path="/rokok" element={<Rokok />} />
    </Routes>
  );
};

export default AppRouter;
