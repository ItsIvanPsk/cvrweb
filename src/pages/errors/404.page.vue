<template>
    <div class="error-page">
      <div class="error-container">
        <h1 class="error-code">404</h1>
        <div class="error-content">
          <p class="error-message">¡Oops! La página que buscas no existe.</p>
          <p class="error-description">
            Es posible que el enlace esté roto o la página haya sido eliminada.
          </p>
          <RouterLink to="/" class="error-button">Volver a la página principal</RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PageNotFound",
  };
  </script>
  
  <style scoped lang="scss">
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 300vh;
  }
  
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 600px;
    background-color: #2d3748;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    color: #ffffff;
    gap: 1.5rem;
  }
  
  .error-code {
    font-size: 6rem;
    font-weight: bold;
    color: #007bff;
  }
  
  .error-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .error-message {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .error-description {
    font-size: 1rem;
    color: #d1d5db;
  }
  
  .error-button {
    padding: 0.8rem 1.5rem;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .error-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
  
  @media (min-width: 768px) {
    .error-container {
      flex-direction: row;
      text-align: left;
      max-width: 800px;
      gap: 2rem;
    }
  
    .error-code {
      font-size: 8rem;
      margin-right: 2rem;
    }
  
    .error-content {
      align-items: flex-start;
      justify-content: center;
    }
  }
  </style>
  