import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { closeMenu, setHomeButton, selectHome } from "./homeSlice";
import { NavBar } from "../../components/NavBar";
import { FullVideo } from "../../components/FullVideo";
import { ShadedBottomInfo } from "../../components/ShadedBottomInfo";
import { ShadedInfo } from "../../components/ShadedInfo";
import { HomeResume } from "../../components/HomeResume";
import { RedirectButton } from "../../components/RedirectButton";
import { Maps } from "../../components/Maps";
import { MapsWrapper } from "../../components/MapsWrapper";
import { Carrousel } from "../../components/Carrousel";
import { CustomFooter } from "../../components/CustomFooter";
import { Whatsapp } from "../../components/Whatsapp";

import mainVideo from "../../assets/videos/main.mp4";
import home_resume1 from "../../assets/images/home-resume1.jpg";
import home_resume2 from "../../assets/images/home-resume2.jpg";
import home_resume3 from "../../assets/images/home-resume3.jpg";
import footer from "../../assets/images/footer.jpg";
import logo from "../../assets/images/logo.png";
import { homeGalery, socialMedia } from "../../assets/data/homeGalery";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { menuHandler } = useSelector(selectHome);
  const handleCloseMenu = () => {
    if (menuHandler) {
      dispatch(closeMenu());
    }
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

        <MapsWrapper
          city="TIMBIO"
          district="El arado"
          adress="Calle 12 # 22-132"
        >
          <Maps centerlat={2.3512495} centerlng={-76.6894962} />
        </MapsWrapper>

        <Carrousel carrousel_photos={homeGalery} title="GALERIA" />

        <CustomFooter
          logo={logo}
          background={footer}
          socialMedia={socialMedia}
        />
        <Whatsapp />
      </section>
    </main>
  );
};

export default Home;
