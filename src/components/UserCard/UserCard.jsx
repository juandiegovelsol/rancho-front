import PropTypes from "prop-types";

import { RedirectButton } from "../RedirectButton";

import "./user-card.scss";

const UserCard = ({
  email,
  name,
  lastname,
  handleUserEdit,
  userEdit,
  userName,
  lastName,
  setUserName,
  setLastName,
}) => {
  return (
    <span className="user-card">
      {!userEdit && (
        <>
          <p>{`Email: ${email}`}</p>
          <p>{`Nombre: ${name}`}</p>
          <p>{`Apellido: ${lastname}`}</p>
          <RedirectButton text="Editar" link="" redirect={handleUserEdit} />
        </>
      )}
      {userEdit && (
        <>
          <p>{`Email: ${email}`}</p>
          <form className="user-card__form">
            <div>
              <label>Nombre: </label>
              <input
                className="user-card__input"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label>Apellido :</label>
              <input
                className="user-card__input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </form>
          <RedirectButton text="Guardar" link="" redirect={handleUserEdit} />
        </>
      )}
    </span>
  );
};

UserCard.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  lastname: PropTypes.string,
  handleUserEdit: PropTypes.func,
  userEdit: PropTypes.bool,
  userName: PropTypes.string,
  lastName: PropTypes.string,
  setUserName: PropTypes.func,
  setLastName: PropTypes.func,
};

export default UserCard;
