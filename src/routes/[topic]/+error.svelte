<section class="error-page">
  <div class="error-card">
    <h1 class="error-title">Test Not Found</h1>
    <p class="error-message">
      The test you are looking for does not exist or has been removed.
    </p>
    <button class="home-button" on:click={() => window.history.back()}>
      Go Back
    </button>
  </div>
</section>

<style>
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f5f7fa;
    padding: 2rem;
  }

  .error-card {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    padding: 3rem 2.5rem;
    max-width: 480px;
    text-align: center;
  }

  .error-title {
    font-size: 2rem;
    color: #e53e3e;
    margin: 0 0 1rem;
  }

  .error-message {
    font-size: 1rem;
    color: #4a5568;
    margin: 0 0 2rem;
  }

  .home-button {
    background: #3182ce;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .home-button:hover {
    background: #2b6cb0;
  }
</style>
