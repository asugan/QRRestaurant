import React from "react";
import { withAuthInfo } from "@propelauth/react";
import { Link } from "react-router-dom";
import AuthButtons from "../AuthButtons";

function AdminHome({ isLoggedIn, user }) {
  if (isLoggedIn) {
    return (
      <div className="admincontainer">
        <h1>Admin Paneli</h1>
        <h5>{user.email}</h5>
        <AuthButtons />
        <div className="navbar">
          <Link className="navlink" to="/">
            Anasayfa
          </Link>
          <Link className="navlink" to="/admin/addcategory">
            Kategori Ekle
          </Link>
          <Link className="navlink" to="/admin/post">
            Yemek Ekle
          </Link>
          <Link className="navlink" to="/admin/masalar">
            Masalara Git
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <AuthButtons />
      </div>
    );
  }
}

export default withAuthInfo(AdminHome);
