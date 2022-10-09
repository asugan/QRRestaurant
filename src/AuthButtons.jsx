import {
  withAuthInfo,
  useLogoutFunction,
  useRedirectFunctions,
} from "@propelauth/react";

// isLoggedIn is automatically injected from withAuthInfo
function AuthenticationButtons({ isLoggedIn }) {
  const logoutFn = useLogoutFunction();
  const { redirectToSignupPage, redirectToLoginPage, redirectToAccountPage } =
    useRedirectFunctions();

  if (isLoggedIn) {
    return (
      <div>
        <button onClick={redirectToAccountPage}>Hesabım</button>
        <button onClick={() => logoutFn()}>Çıkış Yap</button>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20rem",
        }}
      >
        <button onClick={redirectToLoginPage}>Admin Girişi</button>
      </div>
    );
  }
}

export default withAuthInfo(AuthenticationButtons);
