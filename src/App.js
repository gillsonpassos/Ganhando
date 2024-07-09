import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Modal from './Modal';
import OutraPagina from './OutraPagina';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [codigoCasa, setCodigoCasa] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const showModal = () => {
    if (!nomeCompleto || !login || !codigoCasa) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (!isValidEmail(login)) {
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }

    if (senha.length < 8) {
      setErrorMessage('A senha deve ter no mínimo 8 caracteres.');
      return;
    }

    setShow(true);
    setErrorMessage('');
    setNomeCompleto('');
    setLogin('');
    setSenha('');
    setCodigoCasa('');
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <h1 className="titulo">Hacker slots</h1>
              <div className="form-group">
                <label htmlFor="nome-completo">Nome completo</label>
                <input
                  id="nome-completo"
                  value={nomeCompleto}
                  onChange={(e) => setNomeCompleto(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="login">Login (Email)</label>
                <input
                  id="login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input
                  id="senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="codigo-casa">Código da casa</label>
                <input
                  id="codigo-casa"
                  value={codigoCasa}
                  onChange={(e) => setCodigoCasa(e.target.value)}
                />
              </div>
              <button onClick={showModal}>Entrar</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </header>
            <Modal show={show} handleClose={hideModal} />
          </div>
        } />
        <Route path="/outra-pagina" element={<OutraPagina />} />
      </Routes>
    </Router>
  );
}

export default App;
