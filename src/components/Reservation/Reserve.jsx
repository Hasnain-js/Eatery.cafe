import React from "react";
import "./reserve.scss";
export const ReserveForm = () => {
  return (
    <div id="container">
      <h2 className="section-tittle">Reserve a table</h2>
      <form action="">
        <input type="text" id="name" name="name" placeholder="Full Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="No of Guests"
        />
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Reservation Date"
        />
        <input
          type="text"
          id="reservetype"
          name="reservetype"
          placeholder="Reservation Types"
        />
        <input
          type="text"
          id="reserve_request"
          name="reserve_request"
          placeholder="Any Special Requests"
        />
        <button type="submit">Reserve a table</button>
      </form>
    </div>
  );
};
