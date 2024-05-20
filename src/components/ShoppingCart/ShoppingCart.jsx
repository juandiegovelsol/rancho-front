import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCreatedOrder,
  createOrderAsync,
  openAccount,
  selectHome,
} from "../../pages/Home/homeSlice";
import { clearCartQuant } from "../../pages/MenuPage/menuPageSlice";

import { AddToCart } from "../AddToCart";
import "./shopping-cart.scss";

const ShoppingCart = ({ cartlist }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, createdOrder } = useSelector(selectHome);
  const [hasItems, setHasItems] = useState(false);
  const [orderprev, setOrder] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  const [orderData, setOrderData] = useState({});
  const epaycoKey = import.meta.env.VITE_EPAYCO_KEY;
  const [total, setTotal] = useState(0);

  const handleOrder = (cartlist) => {
    setOrder([]);
    setOrderPrice(0);
    cartlist.map((item) => {
      if (item.quantity) {
        setOrder((current) => [...current, item]);
        setOrderPrice((prev) => prev + item.quantity * item.price);
      }
    });
  };

  const redirect = () => {
    navigate("/menu");
  };

  useEffect(() => {
    const found = cartlist.find((element) => element.quantity > 0);
    let subtotal = 0;
    cartlist.forEach(({ price, quantity }) => {
      quantity ? (subtotal = subtotal + price * quantity) : () => {};
    });
    setTotal(subtotal);
    found ? setHasItems(true) : setHasItems(false);
  }, [cartlist]);

  useEffect(() => {
    if (orderprev.length) {
      /* console.log("order", orderprev);
      console.log("orderPrice", orderPrice); */
      //aqui debera hacer el dispatch para generar la orden y hacer el pago siempre y cuando el usuario este logueado
      if (Object.keys(user).length === 0) {
        dispatch(openAccount());
      } else {
        const key = "_id";
        const value = user._id;
        const order = orderprev.map(({ _id, quantity }) => {
          return { id: _id, quantity: quantity };
        });
        const total = orderPrice;
        const date = `${Date.now()}`;
        dispatch(createOrderAsync({ key, value, order, total, date }));
        /*  console.log("ORDER ARRAY TO BODY", JSON.stringify({ order, total })); */
      }
    }
  }, [orderprev]);

  useEffect(() => {
    if (Object.keys(createdOrder).length !== 0) {
      const description = `${orderprev.map(({ title, quantity, price }) => {
        return ` ${quantity} ${title} - $${quantity * price}`;
      })}.`;
      setOrderData({
        name: "Orden El Rancho",
        description: `${description}`,
        invoice: `${createdOrder._id}`,
        currency: "cop",
        amount: `${orderPrice}`,
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "en",
        external: "false",
        name_billing: `${user.name} ${user.lastname}`,
        address_billing: ``,
        type_doc_billing: "cc",
        mobilephone_billing: "3050000000",
        number_doc_billing: "100000000",
      });
      setOrder([]);
      setOrderPrice(0);
      dispatch(clearCartQuant());
      dispatch(clearCreatedOrder());
    }
  }, [createdOrder]);

  useEffect(() => {
    if (Object.keys(orderData).length !== 0) {
      //handler.open(orderData); Esto habilita la opcion para pago con epayco
    }
  }, [orderData]);

  // eslint-disable-next-line
  const handler = ePayco.checkout.configure({
    key: `${epaycoKey}`,
    test: true,
  });

  return (
    <section className="cart">
      {cartlist.length &&
        cartlist.map(({ title, price, image, quantity }, index) => {
          if (quantity) {
            return (
              <article className="cart-card" key={`${title}${quantity}`}>
                <span className="cart-card__image">
                  <img src={image} alt="cart-dish" loading="lazy" />
                </span>
                <span className="cart-card__resume">
                  <h4>{title}</h4>
                  <p>{`Precio: $${price * quantity}`}</p>
                  <AddToCart index={index} quantity={quantity} />
                </span>
              </article>
            );
          }
        })}

      <article className="cart__info">
        <p>Total de la orden: {total}</p>
        {hasItems && (
          <>
            <button
              onClick={() => handleOrder(cartlist)}
              className="cart__button"
            >
              Pagar
            </button>
            <button
              onClick={() => {
                dispatch(clearCartQuant());
                console.log("Time: ", Date.now());
              }}
              className="cart__button"
            >
              Vaciar
            </button>
          </>
        )}
        {!hasItems && (
          <>
            <p className="cart__text">Aún no tienes artículos añadidos...</p>
            <button onClick={redirect} className="cart__button">
              Añadir
            </button>
          </>
        )}
      </article>
    </section>
  );
};

ShoppingCart.propTypes = {
  cartlist: PropTypes.array,
};

export default ShoppingCart;
