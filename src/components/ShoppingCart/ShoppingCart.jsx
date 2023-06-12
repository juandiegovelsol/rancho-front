import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { AddToCart } from "../AddToCart";
import "./shopping-cart.scss";

const ShoppingCart = ({ cartlist }) => {
  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    const found = cartlist.find((element) => element.quantity > 0);
    found ? setHasItems(true) : setHasItems(false);
  }, [cartlist]);
  return (
    <section className="cart">
      {cartlist.length &&
        cartlist.map(({ title, price, image, quantity }, index) => {
          if (quantity) {
            return (
              <article className="cart-card" key={`${title}${quantity}`}>
                <span className="cart-card__image">
                  <img src={image} alt="cart-dish" />
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
        {hasItems && <button className="cart__button">Pagar</button>}
        {!hasItems && (
          <>
            <p className="cart__text">Aún no tienes artículos añadidos...</p>
            <button className="cart__button">Añadir</button>
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
