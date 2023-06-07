import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, openMenu, closeMenu, setHomeButton } from "./homeSlice";
import { NavBar } from "../../components/NavBar";
import { Menu } from "../../components/Menu";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { menuHandler } = useSelector(selectHome);
  const handleClick = () => {
    if (menuHandler) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  };

  useEffect(() => {
    dispatch(setHomeButton());
  }, []);

  return (
    <main className="home">
      <NavBar />
      {menuHandler && <Menu />}
      <p>Home page</p>
      <button onClick={handleClick}>Click</button>
    </main>
  );
};

export default Home;
