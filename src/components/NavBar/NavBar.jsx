import { useSelector, useDispatch } from "react-redux";
import { selectHome, openMenu, closeMenu } from "../../pages/Home/homeSlice";
import { Menu } from "../../components/Menu";
import menu from "../../assets/icons/menu.svg";
import account from "../../assets/icons/account.svg";
import cart from "../../assets/icons/cart.svg";
import "./nav-bar.scss";

const NavBar = () => {
  const dispatch = useDispatch();
  const { menuHandler } = useSelector(selectHome);

  const handleMenu = () => {
    menuHandler ? dispatch(closeMenu()) : dispatch(openMenu());
  };

  return (
    <section className="nav-bar">
      <article className="nav-bar__header">
        <h1 className="nav-bar__title">El Rancho</h1>
        <button onClick={handleMenu} className="nav-bar__menu-button">
          <img src={cart} alt="cart" />
        </button>
        <button onClick={handleMenu} className="nav-bar__menu-button">
          <img src={account} alt="account" />
        </button>
        <button onClick={handleMenu} className="nav-bar__menu-button">
          <img src={menu} alt="menu" />
        </button>
      </article>
      <article className="nav-bar__menu">{menuHandler && <Menu />}</article>
    </section>
  );
};

export default NavBar;
