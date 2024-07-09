import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import './OutraPagina.css';

import imagem1 from './assets/imagem1.png';
import imagem2 from './assets/imagem2.png';
import imagem3 from './assets/imagem3.png';
import imagem4 from './assets/imagem4.png';
import imagem5 from './assets/imagem5.png';
import imagem6 from './assets/imagem6.png';
import imagem7 from './assets/imagem7.png';
import imagem8 from './assets/imagem8.png';
import imagem9 from './assets/imagem9.png';
import imagem10 from './assets/imagem10.png';
import imagem11 from './assets/imagem11.png';
import imagem12 from './assets/imagem12.png';
import imagem13 from './assets/imagem13.png';

const OutraPagina = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [percentages, setPercentages] = useState([]);

    const voltarPaginaPrincipal = () => {
        navigate('/');
    };

    const imagens = [
        imagem1, imagem2, imagem3, imagem4, imagem5, imagem6,
        imagem7, imagem8, imagem9, imagem10, imagem11, imagem12, imagem13
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 40000); // Simulando 3 segundos de carregamento

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const randomPercentages = imagens.map(() => ({
            bar1: Math.floor(Math.random() * 100) + 1,
            bar2: Math.floor(Math.random() * 100) + 1,
            bar3: Math.floor(Math.random() * 100) + 1,
        }));
        setPercentages(randomPercentages);
    }, []);

    const getRandomSpeed = () => {
        return Math.random() * 0.5 + 0.1; // Velocidade entre 0.1 e 0.6
    };

    return (
        <div className="outra-pagina">
            <h1 className='bober'>Casa Rackeada</h1>
            <h2 className='bober'>Distribuição da casa</h2>
            <div className="imagens-container">
                {imagens.map((imagem, index) => (
                    <div key={index} className="imagem-item">
                        <div className="imagem-wrapper">
                            <img src={imagem} alt={`Imagem ${index + 1}`} className="imagem" />
                            {loading && (
                                <div className="bar-loaders">
                                    <div className="bar-container">
                                        <BarLoader color="red" height={20} width={250} className="bar-loader" speedMultiplier={getRandomSpeed()} />
                                        <span className="percentage">{percentages[index]?.bar1}%</span>
                                    </div>
                                    <div className="bar-container">
                                        <BarLoader color="yellow" height={20} width={250} className="bar-loader" speedMultiplier={getRandomSpeed()} />
                                        <span className="percentage">{percentages[index]?.bar2}%</span>
                                    </div>
                                    <div className="bar-container">
                                        <BarLoader color="#36D7B7" height={20} width={250} className="bar-loader" speedMultiplier={getRandomSpeed()} />
                                        <span className="percentage">{percentages[index]?.bar3}%</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={voltarPaginaPrincipal}>Voltar para Página Principal</button>
        </div>
    );
};

export default OutraPagina;
