import React from 'react';
import './header.css';  // Importa el archivo de estilos


function Header() {
  return (
    <header className="header">
      <h1>Club de Realidad Virtual</h1>
      <p>Iniciativa creada en 2019 para la divulgación de la realidad Virtual.</p>
      <a className='header-leer' href='/conocenos'>Leer más</a>
    </header>
  );
}

export default Header;
