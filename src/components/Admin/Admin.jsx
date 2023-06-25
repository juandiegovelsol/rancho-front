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
  updateOrderAsync,
  clearUpdatedOrder,
} from "./adminSlice";
import {
  selectMenuPage,
  getDishesAsync,
} from "../../pages/MenuPage/menuPageSlice";
import { UserCard } from "../UserCard";
import { Category } from "../Category";
import { UsersCard } from "../UsersCard";
import { OrderCard } from "../OrderCard";
import { Dish } from "../Dish";
import up_arrow from "../../assets/icons/up-arrow.svg";
import down_arrow from "../../assets/icons/down-arrow.svg";
import "./admin.scss";
import { RedirectButton } from "../RedirectButton";

const Admin = ({ name }) => {
  const { user } = useSelector(selectHome);
  const dispatch = useDispatch();
  const { lastname, email } = user || "";
  const { loading, allUsers, updatedUser, allOrders, updatedOrder } =
    useSelector(selectAdmin);
  const { dishes } = useSelector(selectMenuPage);
  const [open, setOpen] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [orderEdit, setOrderEdit] = useState([]);
  const [orderState, setOrderState] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [menuEdit, setMenuEdit] = useState([]);
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

  const handleOrderEdit = (index, _id) => {
    if (orderEdit[index]) {
      const newState = orderEdit.map((c, i) => {
        if (i === index) {
          return false;
        } else {
          return c;
        }
      });
      if (orderState) {
        const key = "_id";
        const value = _id;
        const status = orderState;
        dispatch(updateOrderAsync({ key, value, status }));
        setOrderState("");
      }
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

  const handleMenuEdit = (index, _id) => {
    if (menuEdit[index]) {
      const newState = menuEdit.map((c, i) => {
        if (i === index) {
          return false;
        } else {
          return c;
        }
      });
      setMenuEdit(newState);
    } else {
      const newState = menuEdit.map((c, i) => {
        if (i === index) {
          return true;
        } else {
          return c;
        }
      });
      setMenuEdit(newState);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const image = e.target.elements[0].files[0];
    const title = e.target.elements[1].value;
    const description = e.target.elements[2].value;
    const price = e.target.elements[3].value;
    const _id = e.target.elements[4].value;
    const index = e.target.elements[5].value;
    console.log(image, title, description, +price);
    handleMenuEdit(+index, _id);
    if (image !== undefined) {
      console.log(image);
      //CONTINUAR AQUI... hacer dispatch de POST image
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

  useEffect(() => {
    if (Object.keys(updatedOrder).length !== 0) {
      const key = "_id";
      const value = user._id;
      dispatch(getAllOrdersAsync({ key, value }));
      dispatch(clearUpdatedOrder());
    }
  }, [updatedOrder]);

  useEffect(() => {
    if (openMenu) {
      if (!dishes.length) {
        dispatch(getDishesAsync());
      } else {
        setMenuEdit(new Array(dishes.length).fill(false));
      }
    }
  }, [openMenu]);

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
            ({ _id, user_id, date, order, total, status }, index) => (
              <OrderCard
                key={date}
                _id={_id}
                user_id={user_id}
                date={date}
                order={order}
                total={total}
                status={status}
                index={index}
                orderEdit={orderEdit}
                handleOrderEdit={handleOrderEdit}
                setOrderState={setOrderState}
              />
            )
          )}
      </Category>
      <Category
        down_arrow={down_arrow}
        up_arrow={up_arrow}
        title="Menu"
        handleCategory={() => handleCategory(openMenu, setOpenMenu)}
        open={openMenu}
      >
        {dishes.length &&
          dishes.map(
            ({ _id, title, image, description, section, price }, index) => (
              <>
                {menuEdit[index] && (
                  <Dish
                    key={`${title}.`}
                    title={title}
                    image={image}
                    description={description}
                    price={price}
                    edit={menuEdit[index]}
                    _id={_id}
                    index={index}
                    handleSubmit={handleSubmit}
                  />
                )}
                {!menuEdit[index] && (
                  <Dish
                    key={`${title}..`}
                    title={title}
                    image={image}
                    description={description}
                    price={price}
                  >
                    <RedirectButton
                      text="Editar"
                      link=""
                      redirect={() => handleMenuEdit(index, _id)}
                    />
                  </Dish>
                )}
              </>
            )
          )}
      </Category>
    </div>
  );
};

Admin.propTypes = {
  name: PropTypes.string,
};

export default Admin;
