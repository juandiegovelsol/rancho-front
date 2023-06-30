import PropTypes from "prop-types";
import { useState } from "react";

import "./dish.scss";

const Dish = ({
  title,
  image,
  description,
  price,
  children,
  edit = false,
  index = 0,
  _id = "",
  handleSubmit = () => {},
  status = true,
  handleMenuErrase = () => {},
}) => {
  const [imgPrev, setImgPrev] = useState(image);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function load() {
      const { result } = reader;
      setImgPrev(result);
    };
  };

  if (edit) {
    return (
      <div className="dish">
        <form className="dish__form" onSubmit={handleSubmit}>
          <span className="dish__image-wrapper">
            <img
              className="dish__image"
              src={imgPrev}
              alt="dish"
              loading="lazy"
            />
          </span>
          <label className="dish__label">Imagen:</label>
          <input
            className="dish__image-selector"
            type="file"
            size="lg"
            onChange={handleChange}
          ></input>
          <label className="dish__label">Plato:</label>
          <input className="dish__input" type="text" defaultValue={title} />
          <label className="dish__label">Descripción</label>
          <input
            className="dish__input"
            type="text"
            defaultValue={description}
          />
          <label className="dish__label">Precio</label>
          <input className="dish__input" type="text" defaultValue={price} />
          <label className="dish__label"> Disponible:</label>
          <select className="dish__selector">
            <option value="true">Si</option>
            <option value="">No</option>
          </select>
          <input className="dish__input-hidden" defaultValue={_id} />
          <input className="dish__input-hidden" defaultValue={index} />
          <button className="dish__button" type="submit">
            Guardar
          </button>
        </form>
        <button className="dish__button errase" onClick={handleMenuErrase}>
          Eliminar
        </button>
      </div>
    );
  }
  if (status)
    return (
      <div className="dish">
        <span className="dish__image-wrapper">
          <img className="dish__image" src={image} alt="dish" loading="lazy" />
        </span>
        <h3 className="dish__title">{title}</h3>
        <p className="dish__description">{description}</p>
        <p className="dish__price">
          Precio:
          <span>{` $${Math.trunc(price / 1000)}.${
            price % 1000 ? price % 1000 : "000"
          }`}</span>
        </p>
        {children}
      </div>
    );
};

Dish.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  description: PropTypes.string,
  price: PropTypes.number,
  children: PropTypes.node,
  edit: PropTypes.bool,
  index: PropTypes.number,
  _id: PropTypes.string,
  handleSubmit: PropTypes.func,
  status: PropTypes.bool,
  handleMenuErrase: PropTypes.func,
};

export default Dish;
