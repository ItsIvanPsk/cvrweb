import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from '../components/services/team/Team';
import Projects from '../components/services/team/Projects';
import Testimonials from '../components/services/testimonials/Testimonials';

function KnowUs() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5 d-flex flex-row justify-content-center">
        <div className='me-5 col-sm-5'>
          <h1>Conócenos</h1>
          <p className="lead">Somos un equipo dedicado a proporcionar la mejor experiencia a nuestros usuarios. Nuestra misión es hacer del mundo un lugar mejor mediante soluciones innovadoras y centradas en el usuario.</p>
          <p><em>Nuestro equipo está compuesto por profesionales con una vasta experiencia en sus respectivos campos, trabajando juntos para alcanzar nuestros objetivos comunes.</em></p> 
        </div>
        <div>
          <img src='https://via.placeholder.com/600x400' alt='conocenos'/>
        </div>
 </div>
      <Team />
      <Projects />
      <Testimonials />
    </div>
  );
}

export default KnowUs;
