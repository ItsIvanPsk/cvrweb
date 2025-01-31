<template>
    <div class="news-container">
      <header class="news-header">
        <div class="news-image-container">
            <img src="/news/fpempren-winner/thumbnail.jpg" 
                alt="FPEmpren - Club VR IETI gana en Educación y Cultura" 
                class="news-image" />
        </div>
        <h1 class="news-title">🥇 ¡1er puesto en FPEmpren - Educación y Cultura!</h1>
      </header>
  
      <main class="news-content">
        <p>
          El <b>Club VR IETI</b> ha sido premiado con el <b>1er puesto en Educación y Cultura</b> en <b>FPEmpren</b>, 
          destacando como un proyecto innovador en el ámbito educativo.
        </p>
  
        <p>
          Nuestro enfoque en la <b>realidad virtual aplicada a la educación</b> ha demostrado el potencial de esta 
          tecnología para mejorar el aprendizaje y la creatividad de los estudiantes.
        </p>
  
        <blockquote class="news-quote">
          "Este premio es una muestra del potencial que tiene la realidad virtual para cambiar la educación y la cultura." <br /> 
          <span>- Ivan Figueredo, Presidente del Club VR IETI</span>
        </blockquote>
  
        <p>
          Agradecemos a todos los que han creído en nuestra visión. Seguiremos expandiendo nuestro impacto y explorando 
          nuevas formas de aprendizaje con realidad virtual.
        </p>
        </main>
    </div>
</template>
  
<style scoped>
  @import "../../styles/main.scss"; 
  @import "../../styles/news.scss";

  .news-image-container {
  width: 100%;
  height: 300px; /* Ajusta la altura del contenedor */
  overflow: hidden; /* Oculta el exceso de imagen fuera del contenedor */
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.news-image {
  width: 100%;
  height: auto;
  transform: translateY(50px); /* Baja la imagen dentro del contenedor */
}


</style>
  