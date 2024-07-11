import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap

function Testimonials() {
  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Testimonios</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">"Este es el mejor servicio que he utilizado. Altamente recomendado!"</p>
              </div>
              <div className="card-footer">
                <h4 className="card-title mb-0">Cliente 1</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">"El equipo es increíblemente profesional y atento."</p>
              </div>
              <div className="card-footer">
                <h4 className="card-title mb-0">Cliente 2</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">"No podría estar más satisfecho con los resultados."</p>
              </div>
              <div className="card-footer">
                <h4 className="card-title mb-0">Cliente 3</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
    