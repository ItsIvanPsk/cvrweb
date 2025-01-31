<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="footer-title footer-item">Sobre el Club</h3>
        <p class="footer-text">
          El Club de Realidad Virtual IETI es una iniciativa nacida en 2019 en el IES Esteve Terradas i Illa con el objetivo de acercar la realidad virtual a centros educativos y de ocio.
        </p>
      </div>

      <div class="footer-section">
        <h3 class="footer-title footer-item">Enlaces de utilidad</h3>
        <ul class="footer-links">
          <li>
            <RouterLink to="/about-us">Acerca de Nosotros</RouterLink>
          </li>
          <li>
            <RouterLink to="/proyectos">Proyectos</RouterLink>
          </li>
          <li>
            <RouterLink to="/contacto">Contacto</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h3 class="footer-title footer-item">Contáctanos</h3>
        <p class="footer-text">Email: contacto@vrieti.com</p>
        <div class="footer-socials">
          <a href="https://www.instagram.com/clubvr.ieti/" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Club de Realidad Virtual IETI. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #424242;
  color: white;
  padding: 2rem 1rem;
  font-size: 0.9rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #6297C1; /* Primary color */
}

.footer-text {
  margin: 0.5rem 0;
  font-size: 0.85rem;
  color: #fff; /* Complementary secondary */
}

.footer-links {
  list-style: none;
  font-size: 0.85rem;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.footer-socials {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.footer-socials a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.footer-socials a:hover {
  color: #6297C1;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #424242;
  padding-top: 1rem;
}
</style>
