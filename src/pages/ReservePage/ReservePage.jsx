import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, closeMenu, setReserveButton } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { Menu } from "../../components/Menu";
import "./reserve-page.scss";

const ReservePage = () => {
  const dispatch = useDispatch();
  const { menuHandler } = useSelector(selectHome);

  useEffect(() => {
    dispatch(setReserveButton());
    dispatch(closeMenu());
  }, []);

  return (
    <main className="reserve-page">
      <NavBar />
      {menuHandler && <Menu />}
      <p>Reserve Page</p>
    </main>
  );
};

export default ReservePage;
