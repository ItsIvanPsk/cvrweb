<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import Footer from './components/ui/Footer.vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <div class="layout">
    <header class="header">
      <div class="header-container">
        <h1 class="header-title">
          <RouterLink to="/">Club VR IETI</RouterLink>
        </h1>
        <button class="menu-button" @click="toggleMenu" aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="menu-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav :class="['nav', menuOpen ? 'nav-open' : '']">
          <ul class="nav-list">
            <li class="nav-item header-item">
              <RouterLink to="/" class="nav-link" @click="closeMenu">
                Página Principal
              </RouterLink>
            </li>
            <li class="nav-item header-item">
              <RouterLink to="/sobre-nosotros" class="nav-link" @click="closeMenu">
                Sobre Nosotros
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main-container">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>


<style scoped lang="scss">

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}

.header {
  background-color: #424242;
  padding: 1rem 0;
  width: 100%;

  .header-container {
    max-width: 160vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .header-title {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;

    .menu-icon {
      width: 24px;
      height: 24px;
      stroke: #ffffff;
    }
  }

  @media (max-width: 768px) {
    .menu-button {
      display: block;
    }
  }

  .nav {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 768px) {
      display: none;
      flex-direction: column;
      position: absolute;
      top: calc(7% + 5px);
      right: 1rem;
      width: auto;
      background-color: #424242;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 10;
      align-items: flex-start;
    }

    &.nav-open {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .nav-item {
    list-style: none;
  }

  .nav-link {
    text-decoration: none;
    font-size: 1rem;
    color: #ffffff;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      color: #94a3b8;
      background-color: #334155;
      border-radius: 4px;
    }
  }
}
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}
.header {
  background-color: #424242;
  padding: 1rem 0;

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
}

.main-container {
  flex: 1;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: flex-start; 
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

footer {
  background-color: #1e293b;
  color: white;
  text-align: center;
  padding: 1rem 0;
}
</style>
