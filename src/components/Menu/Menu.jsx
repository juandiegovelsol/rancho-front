import { useSelector } from "react-redux";
import { selectHome } from "../../pages/Home/homeSlice";
import { MenuButton } from "../MenuButton";
import "./menu.scss";

const Menu = () => {
  const {
    homeButtonHandler,
    menuButtonHandler,
    reserveButtonHandler,
    eventButtonHandler,
    contactButtonHanlder,
  } = useSelector(selectHome);
  return (
    <section className="menu">
      <MenuButton text="Inicio" link="/" isSelected={homeButtonHandler} />
      <MenuButton text="Menu" link="/menu" isSelected={menuButtonHandler} />
      <MenuButton
        text="Reservas"
        link="/reservas"
        isSelected={reserveButtonHandler}
      />
      <MenuButton
        text="Eventos"
        link="/eventos"
        isSelected={eventButtonHandler}
      />
      <MenuButton
        text="Contacto"
        link="/contacto"
        isSelected={contactButtonHanlder}
      />
    </section>
  );
};

export default Menu;
