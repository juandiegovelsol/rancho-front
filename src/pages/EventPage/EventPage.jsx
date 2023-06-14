import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, closeMenu, setEventButton } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { CustomFooter } from "../../components/CustomFooter";
import { CarrouselFull } from "../../components/CarrouselFull";
import { ShadedBottomInfo } from "../../components/ShadedBottomInfo";
import { ShadedInfo } from "../../components/ShadedInfo";
import { EventWrapper } from "../../components/EventWrapper";

import footer from "../../assets/images/footer.jpg";
import logo from "../../assets/images/logo.png";
import { socialMedia } from "../../assets/data/homeGalery";
import { eventCarrousel, events } from "../../assets/data/eventGalery";
import "./event-page.scss";

const EventPage = () => {
  const dispatch = useDispatch();
  const { menuHandler } = useSelector(selectHome);

  const handleCloseMenu = () => {
    if (menuHandler) {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    dispatch(setEventButton());
    dispatch(closeMenu());
  }, []);

  return (
    <main className="reserve-page">
      <NavBar />
      <section onClick={handleCloseMenu} className="menu-page__content">
        <CarrouselFull carrousel_photos={eventCarrousel}>
          <ShadedInfo
            text="CELEBRACIONES Y EVENTOS EMPRESARIALES"
            text2="ESTO Y MAS EN EL RANCHO"
          />
          <ShadedBottomInfo text="De El Rancho, con amor" />
        </CarrouselFull>

        <EventWrapper
          title={
            "EN EL RANCHO ENCUENTRAS TODO PARA QUE DISFRUTES DE TU EVENTO O CELEBRACIÓN"
          }
          text={
            "Dispones de diferentes estilos para que organices el mejor evento, tu eliges!"
          }
          events={events}
        ></EventWrapper>

        <CustomFooter
          logo={logo}
          background={footer}
          socialMedia={socialMedia}
        />
      </section>
    </main>
  );
};

export default EventPage;
