import React from "react";
import "./Modal.css";

const Modal = ({ show, handleClose, title, message, icon }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          {icon && <div className="modal-icon">{icon}</div>}
          <h2>{title}</h2>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
