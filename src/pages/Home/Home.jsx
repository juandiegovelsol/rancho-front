import { useSelector, useDispatch } from "react-redux";
import { selectHome, openMenu, closeMenu } from "./homeSlice";
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

  return (
    <main className="home">
      {menuHandler && <p>Menu is open</p>}
      <p>Home page</p>
      <button onClick={handleClick}>Click</button>
    </main>
  );
};

export default Home;
