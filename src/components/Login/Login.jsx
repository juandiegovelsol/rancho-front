import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RedirectButton } from "../RedirectButton";
import { useDispatch, useSelector } from "react-redux";
import {
  clearLogoutHandler,
  clearUser,
  createUserAsync,
  selectHome,
  setLogoutHandler,
  updateUserAsync,
} from "../../pages/Home/homeSlice";

import "./login.scss";
import { getUserAsync } from "../../pages/Home/homeSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const { user: userState, logoutHandler } = useSelector(selectHome);
  const { name, lastname, email } = userState || "";
  const { status, admin } = userState || false;

  const handleLogin = (link) => {
    loginWithRedirect();
  };

  const handleLogout = (link) => {
    const key = "email";
    const status = false;
    const value = email;
    dispatch(updateUserAsync({ key, value, status }));
    dispatch(setLogoutHandler());
  };

  useEffect(() => {
    if (user !== undefined) {
      const key = "email";
      const value = user.email;
      dispatch(getUserAsync({ key, value }));
    }
  }, [user]);

  useEffect(() => {
    if (userState === {} && user !== undefined) {
      const { name, lastname, email } = user;
      const status = false;
      const admin = false;
      dispatch(createUserAsync({ name, lastname, email, status, admin }));
    }
    if (userState !== {} && user !== undefined) {
      const { status: actualStatus } = userState || false;
      const { email } = userState || "";
      if (!actualStatus && email && !logoutHandler) {
        const status = true;
        const key = "email";
        const value = email;
        dispatch(updateUserAsync({ key, value, status }));
      }
    }
  }, [userState]);

  useEffect(() => {
    if (logoutHandler && !status) {
      dispatch(clearLogoutHandler());
      logout();
    }
  }, [logoutHandler, status]);

  return (
    <section className="login">
      {status && isAuthenticated && (
        <>
          <RedirectButton text="Logout" link="" redirect={handleLogout} />
        </>
      )}
      {!status && !isAuthenticated && (
        <>
          <RedirectButton text="Login" link="" redirect={handleLogin} />
        </>
      )}
    </section>
  );
};

export default Login;
