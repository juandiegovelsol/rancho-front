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
  clearImageURL,
  uploadImageAsync,
  updateDishAsync,
  createDishAsync,
  deleteDishAsync,
  clearCreatedDish,
  clearDeletedDish,
} from "../../pages/MenuPage/menuPageSlice";
import { UserCard } from "../UserCard";
import { Category } from "../Category";
import { UsersCard } from "../UsersCard";
import { OrderCard } from "../OrderCard";
import { Dish } from "../Dish";
import { RedirectButton } from "../RedirectButton";
import up_arrow from "../../assets/icons/up-arrow.svg";
import down_arrow from "../../assets/icons/down-arrow.svg";
import "./admin.scss";

const Admin = ({ name }) => {
  const { user } = useSelector(selectHome);
  const dispatch = useDispatch();
  const { lastname, email, admin } = user || "";
  const { allUsers, updatedUser, allOrders, updatedOrder } =
    useSelector(selectAdmin);
  const { dishes, updatedDish, imageURL, createdDish, deletedDish } =
    useSelector(selectMenuPage);
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
  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [priceState, setPriceState] = useState(0);
  const [statusState, setStatusState] = useState(true);
  const [idState, setIdState] = useState("");
  const [addDishState, setAddDishState] = useState(false);

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
    console.log(_id);
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
    const file = e.target.elements[0].files[0];
    const title = e.target.elements[1].value;
    const description = e.target.elements[2].value;
    const price = +e.target.elements[3].value;
    const status = e.target.elements[4].value ? true : false;
    const _id = e.target.elements[5].value;
    const index = e.target.elements[6].value;
    handleMenuEdit(+index, _id);

    if (file !== undefined) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "g1jf4xky");
      setTitleState(title);
      setDescriptionState(description);
      setPriceState(price);
      setStatusState(status);
      setIdState(_id);
      dispatch(uploadImageAsync({ formData }));
    } else {
      const key = "_id";
      const value = _id;
      console.log(file, title, description, price, status);
      dispatch(
        updateDishAsync({ key, value, title, description, price, status })
      );
    }
  };

  const handleAddDish = () => {
    if (addDishState) {
      setAddDishState(false);
    } else {
      setAddDishState(true);
    }
  };

  const handleSubmitAddDish = (e) => {
    e.preventDefault();
    const key = "_id";
    const value = user._id;
    const title = e.target.elements[0].value;
    const description = e.target.elements[1].value;
    const price = +e.target.elements[2].value;
    const section = e.target.elements[3].value;
    console.log(e.target.elements);
    dispatch(
      createDishAsync({ key, value, title, description, price, section })
    );
    handleAddDish();
  };

  const handleMenuErrase = (index, id) => {
    handleMenuEdit(index, id);
    const key = "_id";
    const value = user._id;
    dispatch(deleteDishAsync({ key, value, id }));
    console.log(index, id);
  };

  useEffect(() => {
    if (openUsers) {
      if (allUsers.length === 0) {
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

  useEffect(() => {
    if (Object.keys(updatedDish).length !== 0) {
      dispatch(getDishesAsync());
    }
  }, [updatedDish]);

  useEffect(() => {
    if (imageURL) {
      const image = imageURL;
      const title = titleState;
      const description = descriptionState;
      const price = priceState;
      const status = statusState;
      const value = idState;
      const key = "_id";
      dispatch(
        updateDishAsync({
          key,
          value,
          image,
          title,
          description,
          price,
          status,
        })
      );
      dispatch(clearImageURL());
    }
  }, [imageURL]);

  useEffect(() => {
    if (Object.keys(createdDish).length !== 0) {
      dispatch(getDishesAsync());
      dispatch(clearCreatedDish());
    }
  }, [createdDish]);

  useEffect(() => {
    if (Object.keys(deletedDish).length !== 0) {
      dispatch(getDishesAsync());
      dispatch(clearDeletedDish());
    }
  }, [deletedDish]);

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
        <div className="admin__orders">
          {allOrders.length &&
            allOrders.map(
              ({ _id, user_id, date, order, total, status }, index) => (
                <OrderCard
                  key={_id}
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
                  isAdmin={admin}
                />
              )
            )}
        </div>
      </Category>
      <Category
        down_arrow={down_arrow}
        up_arrow={up_arrow}
        title="Menu"
        handleCategory={() => handleCategory(openMenu, setOpenMenu)}
        open={openMenu}
      >
        {dishes.length &&
          dishes.map(({ _id, title, image, description, price }, index) => (
            <div key={`${title}..${_id}`}>
              {menuEdit[index] && (
                <Dish
                  key={`${title}..${_id}`}
                  title={title}
                  image={image}
                  description={description}
                  price={price}
                  edit={menuEdit[index]}
                  _id={_id}
                  index={index}
                  handleSubmit={handleSubmit}
                  handleMenuErrase={() => handleMenuErrase(index, _id)}
                />
              )}
              {!menuEdit[index] && (
                <Dish
                  key={`${title}.${_id}`}
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
            </div>
          ))}

        {addDishState ? (
          <form className="dish__form" onSubmit={handleSubmitAddDish}>
            <label className="dish__label">Plato:</label>
            <input
              className="dish__input"
              type="text"
              defaultValue={"titulo del plato"}
            />
            <label className="dish__label">Descripción</label>
            <input
              className="dish__input"
              type="text"
              defaultValue={"descripcion del plato"}
            />
            <label className="dish__label">Precio</label>
            <input className="dish__input" type="text" defaultValue={20000} />
            <label className="dish__label">Tipo de plato</label>
            <select className="dish__selector">
              <option value="start">Entrada</option>
              <option value="main">Plato fuerte</option>
              <option value="side">Adicional</option>
              <option value="drink">Bebida</option>
            </select>
            <button className="dish__button" type="submit">
              Añadir
            </button>
          </form>
        ) : (
          <RedirectButton
            text="Añadir plato"
            link=""
            redirect={handleAddDish}
          />
        )}
      </Category>
    </div>
  );
};

Admin.propTypes = {
  name: PropTypes.string,
};

export default Admin;
