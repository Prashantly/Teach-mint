import React, { useState } from "react";
import "../assets/modal.css";

function Modal({ toggleModal, title, content }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="close-btn" onClick={toggleModal}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
