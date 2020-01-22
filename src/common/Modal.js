import React from 'react';
import '../styles/Modal.css';
import {func, string } from 'prop-types'


const Modal = ({content, closeModal}) => {

  return (
    <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{content}</p>
        </div>
    </div>
    );
}

Modal.prototype = {
    content: string,
    closeModal: func.isRequired
}

Modal.defaultProps = {
    content: ''
}

export default Modal;
