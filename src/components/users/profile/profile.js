import React from 'react';
import { Navigate } from 'react-router-dom';

function isLoged() {
  return localStorage.getItem('authToken') !== null;
}

const Profile = () => {
  if (!isLoged()) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
        <p>Bienvenido a tu perfil</p>
        <h2>Nombre</h2>
        <h2>Fecha de creacion de la cuenta</h2>
        <h2>Sesiones</h2>
    </div>
  );
};

export default Profile;
