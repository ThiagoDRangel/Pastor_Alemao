import React from 'react';
import './styles.css';

export default function Header() {
  return (
      <nav>
        <ul>
          <li>Página Inicial</li>
          <div className="container-nav">
            <li>Pai</li>
            <li>Mãe</li>
            <li>Ninhadas</li>
            <li>Contato</li>
          </div>
        </ul>
      </nav>
  );
}