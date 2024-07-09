import React from 'react';
import './Modal.css';

const ModalTeste = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h2>Modal Teste</h2>
                <p>Este é um modal de teste.</p>
                <button onClick={handleClose}>Fechar Modal</button>
            </section>
        </div>
    );
};

export default ModalTeste;
