import PropTypes from "prop-types";
import { RedirectButton } from "../RedirectButton";

import "./users-card.scss";

const UsersCard = ({
  _id,
  email,
  name,
  lastname,
  admin,
  changeRole,
  adminid,
}) => {
  return (
    <span className="users-card">
      <p>{`Email: ${email}`}</p>
      <p>{`Nombre: ${name}`}</p>
      <p>{`Apellido: ${lastname}`}</p>
      <div className="users-card__role">
        <p>{admin ? "Rol: Administrador" : "Rol: Usuario"}</p>
        <RedirectButton
          text="Cambiar rol"
          link=""
          redirect={() => changeRole(_id, adminid)}
        />
      </div>
    </span>
  );
};

UsersCard.propTypes = {
  _id: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  lastname: PropTypes.string,
  admin: PropTypes.bool,
  changeRole: PropTypes.func,
  adminid: PropTypes.string,
};

export default UsersCard;
