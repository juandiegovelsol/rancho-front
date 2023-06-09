import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { closeMenu, setHomeButton } from "./homeSlice";
import { NavBar } from "../../components/NavBar";
import { FullVideo } from "../../components/FullVideo";
import { ShadedBottomInfo } from "../../components/ShadedBottomInfo";
import { ShadedInfo } from "../../components/ShadedInfo";
import { HomeResume } from "../../components/HomeResume";
import { RedirectButton } from "../../components/RedirectButton";

import mainVideo from "../../assets/videos/main.mp4";
import home_resume1 from "../../assets/images/home-resume1.jpg";
import home_resume2 from "../../assets/images/home-resume2.jpg";
import home_resume3 from "../../assets/images/home-resume3.jpg";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const redirect = (link) => {
    navigate(link);
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
            text="NATURALEZA, TRANQUILIDAD & BUENA GASTRONOMIA"
            text2="ESTO Y MAS EN EL RANCHO"
          />
          <ShadedBottomInfo text="3 RAZONES PARA VISITAR EL RANCHO" />
        </FullVideo>
        <HomeResume
          direction="normal"
          image={home_resume1}
          text="Vive experiencias de tranquilidad y naturaleza en compañia de los tuyos"
        >
          <RedirectButton
            text="RESERVA AQUÍ"
            link="/reservas"
            redirect={redirect}
          />
        </HomeResume>
        <HomeResume
          direction="inverted"
          image={home_resume2}
          text="Disruta de nuestras delicias tipicas Colombianas de Viernes a Domingo & festivos"
        >
          <RedirectButton text="VER CARTA" link="/menu" redirect={redirect} />
        </HomeResume>
        <HomeResume
          direction="normal"
          image={home_resume3}
          text="La mejor organización de eventos de la región"
        >
          <RedirectButton
            text="RESERVA AQUÍ"
            link="/eventos"
            redirect={redirect}
          />
        </HomeResume>
        <p>Home page</p>
        <button>Click</button>
      </section>
    </main>
  );
};

export default Home;
