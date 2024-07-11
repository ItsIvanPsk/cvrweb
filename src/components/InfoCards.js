import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './info-cards.css';

function InfoCards() {
  return (
    <div className="container py-5 row-cont">
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Últimas noticias</h5>
              <p className="card-text">Proyecto TinTin60CAT 1r premio en la categoría de excelencia en los premios FPImpuls.</p>
              <a href="/noticias/proyecto-tintin60cat-premiado" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Eventos</h5>
              <p className="card-text">Evento de apertura del proyecto HospitalVilladecans VR.</p>
              <a href="/noticias/hospital-viladecans-apertura" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Servicios</h5>
              <p className="card-text">¿Te interesa probar de primera mano la experiencia de la realidad virtual?</p>
              <a href="/servicios" className="btn btn-primary">Ver nuestros servicios</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Desarrollos</h5>
              <p className="card-text">Si estás interesado en un proyecto conjunto con un desarrollo de realidad virtual, contáctanos.</p>
              <a href="/desarrollos" className="btn btn-primary">Contactar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
