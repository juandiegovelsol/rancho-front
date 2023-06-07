import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, closeMenu, setContactButton } from "../Home/homeSlice";
import { NavBar } from "../../components/NavBar";
import { Menu } from "../../components/Menu";
import "./contact-page.scss";

const ContactPage = () => {
  const dispatch = useDispatch();
  const { menuHandler } = useSelector(selectHome);

  useEffect(() => {
    dispatch(setContactButton());
    dispatch(closeMenu());
  }, []);

  return (
    <main className="contact-page">
      <NavBar />
      {menuHandler && <Menu />}
      <p>Contact Page</p>
    </main>
  );
};

export default ContactPage;
