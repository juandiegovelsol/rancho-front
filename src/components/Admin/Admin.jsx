import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, updateUserAsync } from "../../pages/Home/homeSlice";
import {
  selectAdmin,
  getAllUsersAsync,
  changeUserRoleAsync,
  clearUpdatedUser,
} from "./adminSlice";
import { UserCard } from "../UserCard";
import { Category } from "../Category";
import { UsersCard } from "../UsersCard";
import up_arrow from "../../assets/icons/up-arrow.svg";
import down_arrow from "../../assets/icons/down-arrow.svg";
import "./admin.scss";
import { RedirectButton } from "../RedirectButton";

const Admin = ({ name }) => {
  const { user } = useSelector(selectHome);
  const dispatch = useDispatch();
  const { lastname, email } = user || "";
  const { loading, allUsers, updatedUser } = useSelector(selectAdmin);
  const [open, setOpen] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [userEdit, setUserEdit] = useState(false);
  const [userName, setUserName] = useState(name);
  const [lastName, setLastName] = useState(lastname);

  const handleCategory = (state, setState) => {
    state ? setState(false) : setState(true);
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
  const changeRole = (userid, adminid) => {
    const key1 = "_id";
    const value1 = adminid;
    const key2 = "_id";
    const value2 = userid;
    dispatch(changeUserRoleAsync({ key1, value1, key2, value2 }));
  };

  useEffect(() => {
    if (openUsers) {
      if (Object.keys(allUsers).length === 0) {
        const key = "_id";
        const value = user._id;
        dispatch(getAllUsersAsync({ key, value }));
      }
    }
  }, [openUsers]);

  useEffect(() => {
    if (Object.keys(updatedUser).length !== 0) {
      const key = "_id";
      const value = user._id;
      dispatch(getAllUsersAsync({ key, value }));
      dispatch(clearUpdatedUser());
    }
  }, [updatedUser]);

  return (
    <div className="admin">
      <p>{`Bienvenido ${name}`}</p>
      <Category
        down_arrow={down_arrow}
        up_arrow={up_arrow}
        title="Perfil"
        handleCategory={() => handleCategory(open, setOpen)}
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
      <Category
        down_arrow={down_arrow}
        up_arrow={up_arrow}
        title="Usuarios"
        handleCategory={() => handleCategory(openUsers, setOpenUsers)}
        open={openUsers}
      >
        {Object.keys(allUsers).length &&
          allUsers.map(({ _id, email, name, lastname, admin }) => {
            if (_id !== user._id)
              return (
                <UsersCard
                  key={_id}
                  _id={_id}
                  email={email}
                  name={name}
                  lastname={lastname}
                  admin={admin}
                  changeRole={changeRole}
                  adminid={user._id}
                />
              );
          })}
      </Category>
      <Category
        down_arrow={down_arrow}
        up_arrow={up_arrow}
        title="Ordenes"
        handleCategory={() => handleCategory(openOrders, setOpenOrders)}
        open={openOrders}
      />
      <Category
        down_arrow={down_arrow}
        up_arrow={up_arrow}
        title="Menu"
        handleCategory={() => handleCategory(openMenu, setOpenMenu)}
        open={openMenu}
      />
    </div>
  );
};

Admin.propTypes = {
  name: PropTypes.string,
};

export default Admin;
