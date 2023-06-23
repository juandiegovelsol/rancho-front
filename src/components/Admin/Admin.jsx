import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, updateUserAsync } from "../../pages/Home/homeSlice";
import { UserCard } from "../UserCard";
import { Category } from "../Category";
import up_arrow from "../../assets/icons/up-arrow.svg";
import down_arrow from "../../assets/icons/down-arrow.svg";
import "./admin.scss";

const Admin = ({ name }) => {
  const { user } = useSelector(selectHome);
  const dispatch = useDispatch();
  const { lastname, email } = user || "";
  const [open, setOpen] = useState(false);
  const [userEdit, setUserEdit] = useState(false);
  const [userName, setUserName] = useState(name);
  const [lastName, setLastName] = useState(lastname);

  const handleCategory = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const handleUserEdit = () => {
    if (userEdit) {
      const key = "_id";
      const value = user._id;
      const name = userName;
      const lastname = lastName;
      dispatch(updateUserAsync({ key, value, name, lastname }));
      setUserEdit(false);
    } else {
      setUserEdit(true);
    }
  };

  return (
    <div className="admin">
      <p>{`Bienvenido ${name}`}</p>
      <Category
        down_arrow={down_arrow}
        up_arrow={up_arrow}
        title="Perfil"
        handleCategory={handleCategory}
        open={open}
      >
        <UserCard
          email={email}
          name={name}
          lastname={lastname}
          handleUserEdit={handleUserEdit}
          userEdit={userEdit}
          userName={userName}
          lastName={lastName}
          setUserName={setUserName}
          setLastName={setLastName}
        />
      </Category>
    </div>
  );
};

Admin.propTypes = {
  name: PropTypes.string,
};

export default Admin;
