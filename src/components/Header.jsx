import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ReserveForm } from "./Reservation/Reserve";
const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div className="headernav">
        {/* logo */}
        <div id="logo">
          <h3>
            <Link to="/">
              Eatery<span>.</span>cafe
            </Link>
          </h3>
        </div>
        {/* navbar */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/chef">Chef</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li className="phone">
            Call Now! 010 020 345{" "}
            <button className="section-btn" onClick={onOpenModal}>
              Reserve a table
            </button>
          </li>
        </ul>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <ReserveForm />
      </Modal>
    </>
  );
};
export default Header;
