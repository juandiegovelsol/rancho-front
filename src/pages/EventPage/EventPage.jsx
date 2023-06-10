import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, closeMenu, setEventButton } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { Menu } from "../../components/Menu";
import "./event-page.scss";

const EventPage = () => {
  const dispatch = useDispatch();
  const { menuHandler } = useSelector(selectHome);

  useEffect(() => {
    dispatch(setEventButton());
    dispatch(closeMenu());
  }, []);

  return (
    <main className="event-page">
      <NavBar />
      {menuHandler && <Menu />}
      <p>Event Page</p>
    </main>
  );
};

export default EventPage;
