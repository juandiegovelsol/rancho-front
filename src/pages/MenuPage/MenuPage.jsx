import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, closeMenu, setMenuButton } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { Menu } from "../../components/Menu";
import "./menu-page.scss";

const MenuPage = () => {
  const dispatch = useDispatch();
  const { menuHandler } = useSelector(selectHome);

  useEffect(() => {
    dispatch(setMenuButton());
    dispatch(closeMenu());
  }, []);

  return (
    <main className="menu-page">
      <NavBar />
      {menuHandler && <Menu />}
      <p>Menu Page</p>
    </main>
  );
};

export default MenuPage;
