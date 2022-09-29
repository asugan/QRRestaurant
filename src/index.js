import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel";
import HomePage from "./Pages/HomePage";
import Masa from "./Pages/Masa";
import Shop from "./Pages/Shop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/masalar" element={<Masa />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route exact path="/masa/:masaId" element={<Shop />} />
    </Routes>
  </BrowserRouter>
);
