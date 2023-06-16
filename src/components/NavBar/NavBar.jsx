import { useSelector, useDispatch } from "react-redux";
import {
  selectHome,
  openMenu,
  closeMenu,
  openAccount,
  closeAccount,
  openCart,
  closeCart,
} from "../../pages/Home/homeSlice";
import { Menu } from "../../components/Menu";
import { selectMenuPage } from "../../pages/MenuPage/menuPageSlice";
import { ShoppingCart } from "../ShoppingCart";
import menu from "../../assets/icons/menu.svg";
import account from "../../assets/icons/account.svg";
import cart from "../../assets/icons/cart.svg";
import "./nav-bar.scss";

const NavBar = () => {
  const dispatch = useDispatch();
  const { menuHandler, accountHandler, cartHandler } = useSelector(selectHome);
  const { cart: cartlist } = useSelector(selectMenuPage);

  const handleMenu = () => {
    menuHandler ? dispatch(closeMenu()) : dispatch(openMenu());
  };
  const handleAccount = () => {
    accountHandler ? dispatch(closeAccount()) : dispatch(openAccount());
  };
  const handleCart = () => {
    cartHandler ? dispatch(closeCart()) : dispatch(openCart());
  };

  return (
    <section className="nav-bar">
      <article className="nav-bar__header">
        <h1 className="nav-bar__title">El Rancho</h1>
        <button onClick={handleCart} className="nav-bar__menu-button">
          <img src={cart} alt="cart" loading="lazy" />
        </button>
        <button onClick={handleAccount} className="nav-bar__menu-button">
          <img src={account} alt="account" loading="lazy" />
        </button>
        <button onClick={handleMenu} className="nav-bar__menu-button">
          <img src={menu} alt="menu" loading="lazy" />
        </button>
      </article>
      {cartHandler && (
        <article className="nav-bar__menu">
          <ShoppingCart cartlist={cartlist} />
        </article>
      )}
      {accountHandler && (
        <article className="nav-bar__menu">
          <Menu />
        </article>
      )}
      {menuHandler && (
        <article className="nav-bar__menu">
          <Menu />
        </article>
      )}
    </section>
  );
};

export default NavBar;
