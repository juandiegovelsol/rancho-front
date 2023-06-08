import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, setHomeButton } from "./homeSlice";
import { NavBar } from "../../components/NavBar";
import { FullVideo } from "../../components/FullVideo";
import { ShadedBottomInfo } from "../../components/ShadedBottomInfo";
import { ShadedInfo } from "../../components/ShadedInfo";

import mainVideo from "../../assets/videos/main.mp4";

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
        <FullVideo videoSrc={mainVideo}>
          <ShadedInfo
            text="NATURALEZA, TRANQUILIDAD & BUENA GASTRONOMIA..."
            text2="ESTO Y MAS EN EL RANCHO"
          />
          <ShadedBottomInfo text="3 RAZONES PARA VISITAR EL RANCHO" />
        </FullVideo>
        <p>Home page</p>
        <button>Click</button>
      </section>
    </main>
  );
};

export default Home;
