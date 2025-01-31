<template>
  <div class="full-container">
    <Hero
      title="Club de Realidad Virtual IETI"
      subtitle="Explorando nuevas realidades desde 2019"
    />
    <main class="main-container">
      <div class="content-container">
        <section>
          <article class="news-article">
            <h3 class="footer-item">Noticias</h3>
            <div class="news-container">
              <div>
                <img
                  src="/news/mq3-available/thumbnail.webp"
                  alt="Meta Quest 3 disponibles en el Club VR IETI"
                />
                <p class="news-container-title"><b>Meta Quest 3 ya en el club</b></p>
                <p class="news-container-subtitle">
                  ¡Las Meta Quest 3 han llegado al Club VR IETI! Descubre sus nuevas características y cómo...
                </p>
                <RouterLink to="/noticias/meta-quest-3-disponibles"><a class="btn">Leer más</a></RouterLink>
              </div>

              <div>
                <img
                  src="/news/impulsfp-winner/thumbnail.webp"
                  alt="Club VR IETI gana el primer premio en ImpulsFP"
                />
                <p class="news-container-title"><b>Ganadores de ImpulsFP</b></p>
                <p class="news-container-subtitle">
                  El Club VR IETI ha sido galardonado con el primer premio en ImpulsFP por su innovación...
                </p>
                <RouterLink to="/noticias/impulsfp-premio-2024"><a class="btn">Leer más</a></RouterLink>
              </div>

              <div>
                <img
                  src="/news/fpempren-winner/thumbnail.jpg"
                  alt="Primer premio en FPEmpren para el Club VR IETI"
                />
                <p class="news-container-title"><b>Éxito en FPEmpren</b></p>
                <p class="news-container-subtitle">
                  ¡Nuestro proyecto VR ha conquistado FPEmpren! Un reconocimiento a la creatividad y...
                </p>
                <RouterLink to="/noticias/fpemprem-premio-2024"><a class="btn">Leer más</a></RouterLink>
              </div>
            </div>

          </article>
        </section>
        <section>
          <article class="team-article">
            <h2 class="footer-item">Equipo Club VR IETI</h2>
            <h3 class="footer-item">Junta directiva</h3>
            <div class="team-container">
              <TeamMember
                imgSrc="/persona.png"
                name="Ivan Figueredo"
                role="Presidente"
              />
              <TeamMember
                imgSrc="/persona.png"
                name="William Molina"
                role="Secretario"
                />
              <TeamMember
                imgSrc="/persona.png"
                name="Nerea López"
                role="Gestion de Eventos"
              /><TeamMember
                imgSrc="/persona.png"
                name="Mireia López"
                role="Gestion de sesiones"
              />
            </div>
            <h3 class="footer-item club-members">Miembros del club</h3>
            <div class="team-container">
              <TeamMember
                imgSrc="/persona.png"
                name="Jenner Sarmiento"
                role="Miembro"
              />
              <TeamMember
                imgSrc="/persona.png"
                name="Sergio Mera Cedeño"
                role="Miembro"
              />
              <TeamMember
                imgSrc="/persona.png"
                name="Miguel Angel López"
                role="Miembro"
              />
              <TeamMember
                imgSrc="/persona.png"
                name="Alejandro"
                role="Miembro"
              />
            </div>
          </article>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import Hero from '../../components/ui/Hero.vue';
import TeamMember from '../../components/ui/TeamMember.vue';
</script>

<style scoped>
.full-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100vw;
  margin: 0;
  padding: 0;
}

.main-container {
  flex: 1;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.news-article {
  margin-bottom: 3rem;
}

.news-article h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.news-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.news-container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-container div:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.news-container img {
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.news-container-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.news-container-subtitle {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.btn-disabled {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  background-color: #7491d6;
}


.club-members {
  margin-top: 2em;
}

.btn-disabled:hover {
  background-color: #7491d6;
  cursor: default;
}

.team-article {
  margin-bottom: 3rem;
}

h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
}

.team-article p {
  margin-bottom: 2rem;
  text-align: center;
  color: #555;
}


.team-article h2 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
}

.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}
</style>
