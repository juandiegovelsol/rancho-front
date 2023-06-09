import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeMenu, setMenuButton, selectHome } from "../Home/homeSlice";
import {
  getCategoriesAsync,
  getDishesAsync,
  selectMenuPage,
} from "./menuPageSlice";
import { NavBar } from "../../components/NavBar";
import { CarrouselFull } from "../../components/CarrouselFull";
import { ShadedBottomInfo } from "../../components/ShadedBottomInfo";
import { AllMenuCategory } from "../../components/AllMenuCategory";
import { CustomFooter } from "../../components/CustomFooter";
import { Whatsapp } from "../../components/Whatsapp";

import { menuCarrousel } from "../../assets/data/menuGalery";
import footer from "../../assets/images/footer.jpg";
import logo from "../../assets/images/logo.png";
import { socialMedia } from "../../assets/data/homeGalery";
import "./menu-page.scss";

const MenuPage = () => {
  const dispatch = useDispatch();
  const { categories, dishes, cart } = useSelector(selectMenuPage);
  const { menuHandler } = useSelector(selectHome);
  const handleCloseMenu = () => {
    if (menuHandler) {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    dispatch(setMenuButton());
    dispatch(closeMenu());
    if (!categories.length) {
      dispatch(getCategoriesAsync());
    }
    if (!dishes.length) {
      dispatch(getDishesAsync());
    }
  }, []);

  return (
    <main className="menu-page">
      <NavBar />
      <section onClick={handleCloseMenu} className="menu-page__content">
        <CarrouselFull carrousel_photos={menuCarrousel}>
          <ShadedBottomInfo text="La auténtica comida colombiana en El Rancho" />
        </CarrouselFull>

        <AllMenuCategory menu={categories} dishes={dishes} cart={cart} />

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

export default MenuPage;
