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
  const { name, email } = userState || "";
  const { status, admin } = userState || false;

  const handleLogin = (link) => {
    console.log(link);
    loginWithRedirect();
  };

  const handleLogout = (link) => {
    console.log(link);
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
    if (isAuthenticated && loginHandler && user !== undefined) {
      if (Object.keys(userState).length !== 0) {
        const { status: actualStatus } = userState || false; //Probar quitando el || false
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

  //New, in case of user login error or create user error delete the following useEffect

  useEffect(() => {
    if (Object.keys(userState).length !== 0 && user === undefined) {
      const key = "email";
      const status = false;
      const value = email;
      dispatch(updateUserAsync({ key, value, status }));
      dispatch(clearUser());
    }
  }, []);

  if (userLoading) return <p>Loading...</p>;

  return (
    <section className="login">
      {status && (
        <div className="login__wrapper">
          {admin && <Admin name={name} />}
          {!admin && <Costumer />}
          <RedirectButton text="Logout" link="" redirect={handleLogout} />
        </div>
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
