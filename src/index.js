import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel";
import AdminPanelPost from "./Pages/AdminPanelPost";
import HomePage from "./Pages/HomePage";
import Masa from "./Pages/Masa";
import Shop from "./Pages/Shop";
import NotFoundPage from "./Pages/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/masalar" element={<Masa />} />
      <Route exact path="/admin" element={<AdminPanel />} />
      <Route exact path="/admin/post" element={<AdminPanelPost />} />
      <Route exact path="/masa/:masaId" element={<Shop />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
