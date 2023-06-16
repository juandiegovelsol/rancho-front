import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AddToCart } from "../AddToCart";
import "./shopping-cart.scss";

const ShoppingCart = ({ cartlist }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hasItems, setHasItems] = useState(false);
  const [order, setOrder] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);

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
    found ? setHasItems(true) : setHasItems(false);
  }, [cartlist]);

  useEffect(() => {
    if (order.length) {
      console.log("order", order);
      console.log("orderPrice", orderPrice);
      //aqui debera hacer el dispatch para generar la orden y hacer el pago siempre y cuando el usuario este logueado
      setOrder([]);
      setOrderPrice(0);
    }
  }, [order]);

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
        {hasItems && (
          <button
            onClick={() => handleOrder(cartlist)}
            className="cart__button"
          >
            Pagar
          </button>
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
