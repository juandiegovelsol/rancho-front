import { useSelector, useDispatch } from "react-redux";
import { selectHome, openMenu, closeMenu } from "../../pages/Home/homeSlice";

import "./nav-bar.scss";

const NavBar = () => {
  const dispatch = useDispatch();
  const { menuHandler } = useSelector(selectHome);

  const handleMenu = () => {
    menuHandler ? dispatch(closeMenu()) : dispatch(openMenu());
  };

  return (
    <header className="nav-bar">
      <h1 className="nav-bar__title">El Rancho</h1>
      <button onClick={handleMenu} className="nav-bar__menu-button">
        Menu
      </button>
    </header>
  );
};

export default NavBar;
