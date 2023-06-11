import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { closeMenu, setMenuButton } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { CarrouselFull } from "../../components/CarrouselFull";
import { ShadedBottomInfo } from "../../components/ShadedBottomInfo";
import { MenuCategory } from "../../components/MenuCategory";
import { CustomFooter } from "../../components/CustomFooter";

import { menuCarrousel } from "../../assets/data/menuGalery";
import footer from "../../assets/images/footer.jpg";
import logo from "../../assets/images/logo.png";
import { socialMedia } from "../../assets/data/homeGalery";
import { menu } from "../../assets/data/menuGalery";

import "./menu-page.scss";

const MenuPage = () => {
  const dispatch = useDispatch();
  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  useEffect(() => {
    dispatch(setMenuButton());
    dispatch(closeMenu());
  }, []);

  return (
    <main className="menu-page">
      <NavBar />
      <section onClick={handleCloseMenu} className="menu-page__content">
        <CarrouselFull carrousel_photos={menuCarrousel}>
          <ShadedBottomInfo text="La auténtica comida colombiana en El Rancho" />
        </CarrouselFull>

        <MenuCategory category={menu[0]} />

        <CustomFooter
          logo={logo}
          background={footer}
          socialMedia={socialMedia}
        />
      </section>
    </main>
  );
};

export default MenuPage;
