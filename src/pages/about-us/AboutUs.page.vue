<template>
    <div class="about-container">
      <h1 class="about-title">Acerca del Club de Realidad Virtual IETI</h1>
      <p class="about-text">
        El Club de Realidad Virtual IETI nació en 2019 en el IES Esteve Terradas i Illa con el propósito de hacer accesible la realidad virtual en el ámbito educativo y de ocio.
      </p>
      <p class="about-text">
        Está formado por alumnos y exalumnos apasionados por la tecnología, buscando superar la barrera del precio del material VR y fomentar el aprendizaje a través de experiencias inmersivas.
      </p>
  
      <hr style="margin-top: 3em;">

      <h2 class="about-subtitle">Nuestra Misión</h2>
      <p class="about-text">
        Queremos acercar la VR a más personas, demostrando su potencial en educación, arte y entretenimiento. Creemos que la tecnología puede cambiar la forma en que aprendemos y exploramos nuevos mundos.
      </p>
  
      <hr style="margin-top: 3em;">

      <h2 class="about-subtitle">¿Qué hacemos?</h2>
      <ul class="about-list">
        <li>Desarrollamos experiencias interactivas en VR.</li>
        <li>Realizamos talleres y formaciones en centros educativos.</li>
        <li>Colaboramos en proyectos de innovación tecnológica.</li>
        <li>Exploramos nuevas aplicaciones de la VR en distintos campos.</li>
      </ul>

      <hr style="margin-top: 3em;">

      <h2 class="about-subtitle">Únete a Nosotros</h2>
      <p class="about-text">
        Si te interesa la realidad virtual y quieres formar parte del club, contáctanos o visita nuestro espacio en el IES Esteve Terradas i Illa.
      </p>

      <hr style="margin-top: 3em;">
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
  };
  </script>
  
  <style scoped>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  .about-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .about-text {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .about-subtitle {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .about-list {
    list-style: none;
    padding: 0;
  }
  
  .about-list li {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  .about-button {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
    color: white;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;
  }
  
  .about-button:hover {
    background-color: #0056b3;
  }
  </style>
  