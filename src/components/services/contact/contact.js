import React from 'react';
import './contact.css'; 

const Contact = () => {
  return (
    <div className="w-1">
        <h2 className='mt-2'>Contácta con nosotros!</h2>
        <p className='w-1'>
            <em>Para cualquier cuestión sobre el club no dudes en enviarnos un mensaje, estaremos encantados de resolver cualquier duda que tengas!</em>
        </p>
        <form className='d-flex flex-column w-1'>
            <input
                type="text"
                placeholder='Nombre'
            />
            <input
                type="text"
                placeholder='Apellidos'
            />
            <input
                type="email"
                placeholder='Correo electronico'
            />
            <input
                type='text'
                placeholder='Introduce tu mensaje aqui'
                className='w-7'
            />
            <button
                id='contact-btn'
                className='btn btn-primary'
            >
                Enviar
            </button>
            <button id='delete-btn' className='btn btn-primary w-2'>Eliminar</button>
        </form>
    </div>
  );
};

export default Contact;
