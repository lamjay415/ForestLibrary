import React from 'react';
import Instructions from "./instructions";
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={handleWindowClose}>
      <section 
        className="modal-main">
        {children}
        <Instructions />
        <img 
        className="instructions-icon"
        id="icon-close"
        src="https://image.flaticon.com/icons/png/24/390/390914.png"
        onClick={handleClose}
        />
      </section>
    </div>
  );
};

export default Modal