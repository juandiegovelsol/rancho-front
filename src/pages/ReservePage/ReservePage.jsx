import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, closeMenu, setReserveButton } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { CustomFooter } from "../../components/CustomFooter";
import { CarrouselFull } from "../../components/CarrouselFull";
import { ShadedBottomInfo } from "../../components/ShadedBottomInfo";
import { ReservationForm } from "../../components/ReservationForm";

import footer from "../../assets/images/footer.jpg";
import logo from "../../assets/images/logo.png";
import { socialMedia } from "../../assets/data/homeGalery";
import { eventCarrousel } from "../../assets/data/eventGalery";
import "./reserve-page.scss";

const ReservePage = () => {
  const dispatch = useDispatch();
  const { menuHandler } = useSelector(selectHome);

  const handleCloseMenu = () => {
    if (menuHandler) {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    dispatch(setReserveButton());
    dispatch(closeMenu());
  }, []);

  return (
    <main className="reserve-page">
      <NavBar />
      <section onClick={handleCloseMenu} className="menu-page__content">
        <CarrouselFull carrousel_photos={eventCarrousel}>
          {" "}
          {/* cambiar las imagenes, estas son de eventos */}
          <ShadedBottomInfo text="De El Rancho, con amor" />
        </CarrouselFull>

        <ReservationForm />

        <CustomFooter
          logo={logo}
          background={footer}
          socialMedia={socialMedia}
        />
      </section>
    </main>
  );
};

export default ReservePage;
