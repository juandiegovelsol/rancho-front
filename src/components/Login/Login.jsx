import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RedirectButton } from "../RedirectButton";
import { useDispatch } from "react-redux";

import "./login.scss";
import { getUserAsync } from "../../pages/Home/homeSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const handleLogin = (link) => {
    loginWithRedirect();
  };

  const handleLogout = (link) => {
    logout();
  };

  useEffect(() => {
    if (user !== undefined) {
      console.log(user);
      const key = "email";
      const value = user.email;
      dispatch(getUserAsync({ key, value }));
    }
  }, [user]);

  return (
    <section className="login">
      {isAuthenticated && (
        <>
          {console.log(user)}
          <RedirectButton text="Logout" link="" redirect={handleLogout} />
        </>
      )}
      {!isAuthenticated && (
        <>
          {console.log(user)}
          <RedirectButton text="Login" link="" redirect={handleLogin} />
        </>
      )}
    </section>
  );
};

export default Login;
