import React from "react";
import { withAuthInfo } from "@propelauth/react";

function AdminHome({ user }) {
  return (
    <div className="admincontainer">
      {user ? <h1>Hello Admin</h1> : <p>Please Log In</p>}
    </div>
  );
}

export default withAuthInfo(AdminHome);
