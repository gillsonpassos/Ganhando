// src/Modal.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';
import hackerImage from './Image/hacker-com-laptop-isolado-em-fundo-transparente_83017-4.jpg';
import tenorGif from './assets/loadingt-buffering.gif';

const Modal = ({ show, handleClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (show) {
            document.body.classList.add('modal-open');
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 10000);
            return () => {
                clearTimeout(timer);
            };
        } else {
            document.body.classList.remove('modal-open');
            setIsLoading(true);
        }
    }, [show]);

    const handleButtonClick = () => {
        if (!isLoading) {
            handleClose();
            navigate('/outra-pagina');
        } else {
            handleClose();
        }
    };

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h2>{isLoading ? "Raqueando" : "Sala Raqueada"}</h2>
                {isLoading ? (
                    <img src={tenorGif} alt="Loading icon" />
                ) : (
                    <img src={hackerImage} alt="Hacker com laptop" />
                )}
                <button onClick={handleButtonClick} className='click'>
                    {isLoading ? "Close" : "Entrar na Casa"}
                </button>
            </section>
        </div>
    );
};

export default Modal;
