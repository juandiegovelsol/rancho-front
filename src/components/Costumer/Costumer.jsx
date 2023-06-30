import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHome, updateUserAsync } from "../../pages/Home/homeSlice";
import { selectCostumer, getCostumerOrdersAsync } from "./costumerSlice";
import { UserCard } from "../UserCard";
import { Category } from "../Category";
import { OrderCard } from "../OrderCard";

import up_arrow from "../../assets/icons/up-arrow.svg";
import down_arrow from "../../assets/icons/down-arrow.svg";

import "./costumer.scss";

const Costumer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectHome);
  const { loading, costumerOrders } = useSelector(selectCostumer);
  const { name, lastname, email, admin } = user || "";
  const [open, setOpen] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
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

  useEffect(() => {
    if (openOrders && costumerOrders.length === 0) {
      const key = "_id";
      const value = user._id;
      dispatch(getCostumerOrdersAsync({ key, value }));
    }
  }, [openOrders]);

  return (
    <div className="costumer">
      <p>{`Hola ${name}!`}</p>
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
        title="Tus ordenes"
        handleCategory={() => handleCategory(openOrders, setOpenOrders)}
        open={openOrders}
      >
        <div className="costumer__orders">
          {costumerOrders.length &&
            costumerOrders.map(
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
                  isAdmin={admin}
                />
              )
            )}
        </div>
      </Category>
    </div>
  );
};

export default Costumer;
