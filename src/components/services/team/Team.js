import React from 'react';
import './team.css';  // Importa el archivo de estilos

function Team() {
  return (
    <section className="team-section">
      <h2>Nuestro Equipo</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Member 1" />
          <h3>Juan Pérez</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Member 2" />
          <h3>Maria López</h3>
          <p>CTO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Member 3" />
          <h3>Pedro Gómez</h3>
          <p>COO</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
