import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap

function Projects() {
  return (
    <section className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Proyectos</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h3 className="card-title">Proyecto 1</h3>
                <p className="card-text">Descripción del proyecto 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h3 className="card-title">Proyecto 2</h3>
                <p className="card-text">Descripción del proyecto 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h3 className="card-title">Proyecto 3</h3>
                <p className="card-text">Descripción del proyecto 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
