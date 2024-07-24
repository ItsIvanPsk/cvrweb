import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (!username || !password) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.Token;

        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(data));
          window.location.href = '/perfil';
        } else {
          alert('No se recibió el token.');
        }
      } else {
        alert('Usuario o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al procesar la solicitud.');
    }
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: ''
    });
  };

  return (
    <>
      <div className='d-flex justify-content-center flex-column'>
        <h2>Inicio de sesión</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column container mt-5 w-50">
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Introduce el usuario"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Introduce la contraseña"
            />
          </div>
          <div className='d-flex flex-row justify-content-center'>
            <button type="submit" className="btn btn-primary mr-2 mt-3 me-5 w-25">Login</button>
            <button type="button" onClick={handleReset} className="btn btn-secondary mt-3 w-25">Limpiar campos</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
