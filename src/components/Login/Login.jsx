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
  getUserAsync,
  setLoginHandler,
  clearLoginHandler,
} from "../../pages/Home/homeSlice";
import { Admin } from "../Admin";
import { Costumer } from "../Costumer";

import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const {
    user: userState,
    logoutHandler,
    userLoading,
    loginHandler,
  } = useSelector(selectHome);
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
    if (user !== undefined && Object.keys(userState).length === 0) {
      dispatch(setLoginHandler());
      const key = "email";
      const value = user.email;
      dispatch(getUserAsync({ key, value }));
    }
  }, [user]);

  useEffect(() => {
    if (loginHandler && user !== undefined) {
      if (Object.keys(userState).length !== 0) {
        const { status: actualStatus } = userState || false;
        const { email } = userState || "";
        if (!actualStatus && email && !logoutHandler) {
          const status = true;
          const key = "email";
          const value = email;
          dispatch(updateUserAsync({ key, value, status }));
          dispatch(clearLoginHandler());
        }
      } else {
        const { name, lastname, email } = user;
        const status = false;
        const admin = false;
        dispatch(createUserAsync({ name, lastname, email, status, admin }));
      }
    }
  }, [userState, loginHandler]);

  useEffect(() => {
    if (status && user !== undefined) {
      dispatch(clearLoginHandler());
    }
  }, [status, user]);

  useEffect(() => {
    if (logoutHandler && !status) {
      dispatch(clearLogoutHandler());
      logout();
    }
  }, [logoutHandler, status]);

  if (userLoading) return <p>Loading...</p>;

  return (
    <section className="login">
      {status && (
        <>
          {admin && <Admin name={name} />}
          {!admin && <Costumer />}
          <RedirectButton text="Logout" link="" redirect={handleLogout} />
        </>
      )}
      {!status && (
        <>
          <RedirectButton text="Login" link="" redirect={handleLogin} />
        </>
      )}
    </section>
  );
};

export default Login;
