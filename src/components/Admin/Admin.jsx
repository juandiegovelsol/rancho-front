import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, updateUserAsync } from "../../pages/Home/homeSlice";
import {
  selectAdmin,
  getAllUsersAsync,
  changeUserRoleAsync,
  clearUpdatedUser,
  getAllOrdersAsync,
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
  const { loading, allUsers, updatedUser, allOrders } =
    useSelector(selectAdmin);
  const [open, setOpen] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [orderEdit, setOrderEdit] = useState([]);
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

  const handleOrderEdit = (index) => {
    if (orderEdit[index]) {
      const newState = orderEdit.map((c, i) => {
        if (i === index) {
          return false;
        } else {
          return c;
        }
      });
      setOrderEdit(newState);
    } else {
      const newState = orderEdit.map((c, i) => {
        if (i === index) {
          return true;
        } else {
          return c;
        }
      });
      setOrderEdit(newState);
    }
  };

  useEffect(() => {
    if (openUsers) {
      if (Object.keys(allOrders).length === 0) {
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

  useEffect(() => {
    if (openOrders) {
      if (allOrders.length === 0) {
        const key = "_id";
        const value = user._id;
        dispatch(getAllOrdersAsync({ key, value }));
      }
    }
  }, [openOrders]);

  useEffect(() => {
    if (allOrders.length) {
      setOrderEdit(new Array(allOrders.length).fill(false));
    }
  }, [allOrders]);

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
      >
        {allOrders.length &&
          allOrders.map(
            ({ _id, user_id, date, order, total, status }, index) => {
              const { name, lastname, email } = user_id || "";
              const day = new Date(+date);
              return (
                <span className="order-card" key={_id}>
                  <p>{`Cliente: ${name}`}</p>
                  <p>{`Email: ${email}`}</p>
                  <p>{`Fecha: ${day.getDate()}/${
                    day.getMonth() + 1
                  }/${day.getFullYear()}`}</p>
                  <ul>
                    {order.length &&
                      order.map(({ id, quantity, _id }) => {
                        const { title } = id || "";
                        const { price } = id || 0;
                        const total = quantity * price;
                        return (
                          <li
                            key={`${id}${quantity}${_id}`}
                          >{`${quantity} ${title}, precio $${Math.trunc(
                            total / 1000
                          )}.${total % 1000 ? total % 1000 : "000"}`}</li>
                        );
                      })}
                  </ul>
                  <p>{`Total: $${Math.trunc(total / 1000)}.${
                    total % 1000 ? total % 1000 : "000"
                  }`}</p>
                  {!orderEdit[index] && <p>{`Estado: ${status}`}</p>}
                  {orderEdit[index] && <p>Editar</p>}
                  <RedirectButton
                    text="Cambiar estado"
                    link=""
                    redirect={() => handleOrderEdit(index)}
                  />
                </span>
              );
            }
          )}
      </Category>
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
