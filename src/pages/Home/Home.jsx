import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, setHomeButton } from "./homeSlice";
import { NavBar } from "../../components/NavBar";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  useEffect(() => {
    dispatch(setHomeButton());
    dispatch(closeMenu());
  }, []);

  return (
    <main className="home">
      <NavBar />
      <section onClick={handleCloseMenu} className="home__content">
        <p>Home page</p>
        <button>Click</button>
      </section>
    </main>
  );
};

export default Home;
