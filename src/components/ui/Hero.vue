<template>
  <section
    class="hero"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="hero-overlay">
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-subtitle">{{ subtitle }}</p>
        <button v-if="ctaText" @click="handleCtaClick" class="hero-cta">
          {{ ctaText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
    ctaText: {
      type: String,
      default: null,
    },
    ctaAction: {
      type: Function,
      default: null,
    },
  },
  methods: {
    handleCtaClick() {
      if (this.ctaAction) {
        this.ctaAction();
      } else {
        console.warn("No CTA action provided.");
      }
    },
  },
};
</script>

<style scoped>
.hero {
  width: 100vw;
  height: 50vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
}

.hero-overlay {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: #424242; /* Fondo semi-transparente del secondary color */
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  z-index: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: #6297C1; /* Primary color */
  margin-top: 5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: white;
}

.hero-cta {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #6297C1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hero-cta:hover {
  background-color: #013281;
}
</style>
