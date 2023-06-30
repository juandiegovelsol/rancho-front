import { useState, useEffect } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./reservation-form.scss";

const ReservationForm = () => {
  const [value, onChange] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const i = e.target.elements.length;
    const people = e.target.elements[i - 3].value;
    const hour = e.target.elements[i - 2].value;
    window.open(
      `https://wa.me/573113184215?text=Hola%2C%20quisiera%20reservar%20una%20mesa%20para%20${people}%20personas%20a%20las%20${hour}%2C%20el%20dia%20${value.getDate()}%2F${value.getMonth()}`
    );
  };

  return (
    <section className="reservation">
      <p className="reservation__announce">
        Para reserva en dia de semana comunícate via whatsapp
      </p>
      <p className="reservation__announce">
        Para reservas mayores de 20 personas comunícate vía whatsapp
      </p>
      <form onSubmit={handleSubmit} className="reservation__calendar">
        <Calendar onChange={onChange} value={value} />
        <article className="reservation__wrapper">
          <label>Personas:</label>
          <select className="reservation__state-selector">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
          </select>
          <label>Hora:</label>
          <select className="reservation__state-selector">
            <option value={1130}>11:30</option>
            <option value={1200}>12:00</option>
            <option value={1230}>12:30</option>
            <option value={100}>1:00</option>
            <option value={130}>1:30</option>
            <option value={200}>2:00</option>
            <option value={230}>2:30</option>
          </select>
        </article>
        <button className="reservation__button" type="submit">
          Reservar
        </button>
      </form>
    </section>
  );
};

export default ReservationForm;
