import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel";
import AdminPanelPost from "./Pages/AdminPanelPost";
import HomePage from "./Pages/HomePage";
import Masa from "./Pages/Masa";
import Shop from "./Pages/Shop";
import NotFoundPage from "./Pages/NotFoundPage";
import AdminRegister from "./Pages/AdminRegister";
import { AuthProvider } from "@propelauth/react";
import "./Styles/app.scss";
import AdminPanelCategory from "./Pages/AdminPanelCategory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider authUrl={process.env.REACT_APP_PROPELAUTH_AUTH_URL}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/admin" element={<AdminPanel />} />
        <Route exact path="/admin/masalar" element={<Masa />} />
        <Route exact path="/admin/post" element={<AdminPanelPost />} />
        <Route
          exact
          path="/admin/addcategory"
          element={<AdminPanelCategory />}
        />
        <Route exact path="/admin/register" element={<AdminRegister />} />
        <Route exact path="/masa/:masaId" element={<Shop />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
