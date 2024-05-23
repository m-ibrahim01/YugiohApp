import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Register from './register';
import Login from './login';
import Collections from './collections';
import CardAdder from './cardAdder';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Yugioh Collection Database</h1>
        <nav className="app-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/card-adder">Card Adder</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/card-adder" element={<CardAdder />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
