import PropTypes from "prop-types";

import { RedirectButton } from "../RedirectButton";

import "./order-card.scss";

export const OrderCard = ({
  _id,
  user_id,
  date,
  order,
  total,
  status,
  index,
  orderEdit = false,
  handleOrderEdit = () => {},
  setOrderState = () => {},
  isAdmin = false,
}) => {
  const { name, email } = user_id || "";
  const day = new Date(+date);
  return (
    <span className="order-card" key={_id}>
      <p>{`Cliente: ${name}`}</p>
      <p>{`Email: ${email}`}</p>
      <p>{`Fecha: ${day.getDate()}/${
        day.getMonth() + 1
      }/${day.getFullYear()}`}</p>
      <ul className="order-card__order">
        {order.length &&
          order.map(({ id, quantity, _id }) => {
            const { title } = id || "";
            const { price } = id || 0;
            const total = quantity * price;
            return (
              <li
                className="order-card__list-item"
                key={`${id}${quantity}${_id}`}
              >{`${quantity} ${title}, precio $${Math.trunc(total / 1000)}.${
                total % 1000 ? total % 1000 : "000"
              }`}</li>
            );
          })}
      </ul>
      <p>{`Total: $${Math.trunc(total / 1000)}.${
        total % 1000 ? total % 1000 : "000"
      }`}</p>
      {!orderEdit[index] && (
        <>
          <p>{`Estado: ${status}`}</p>
          {isAdmin && (
            <RedirectButton
              text="Cambiar estado"
              link=""
              redirect={() => handleOrderEdit(index)}
            />
          )}
        </>
      )}
      {orderEdit[index] && isAdmin && (
        <>
          <form>
            <label>Estado:</label>
            <select
              onChange={(e) => setOrderState(e.target.value)}
              className="order-card__selector"
            >
              <option value="">Seleccione</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Pagado">Pagado</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </form>
          <RedirectButton
            text="Guardar cambios"
            link=""
            redirect={() => handleOrderEdit(index, _id)}
          />
        </>
      )}
    </span>
  );
};

OrderCard.propTypes = {
  _id: PropTypes.string,
  user_id: PropTypes.object,
  date: PropTypes.string,
  order: PropTypes.array,
  total: PropTypes.number,
  status: PropTypes.string,
  index: PropTypes.number,
  orderEdit: PropTypes.array,
  handleOrderEdit: PropTypes.func,
  setOrderState: PropTypes.func,
  isAdmin: PropTypes.bool,
};

export default OrderCard;
