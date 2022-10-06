import { withAuthInfo } from "@propelauth/react";
import { Link } from "react-router-dom";

// user is automatically injected from withAuthInfo
function AuthInfoOnFrontend({ user }) {
  return (
    <span>
      <h2>User Info</h2>
      {user && user.pictureUrl && (
        <img src={user.pictureUrl} className="pictureUrl" />
      )}
      <pre>user: {JSON.stringify(user, null, 2)}</pre>
      <Link to="/admin">Admin Page</Link>
    </span>
  );
}

export default withAuthInfo(AuthInfoOnFrontend);
