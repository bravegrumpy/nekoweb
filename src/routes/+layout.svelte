<!-- src/routes/+layout.svelte -->
<script lang="ts">
  /*
   * Import global styles here in the root layout.
   * This ensures they are available on every page.
   */
  import "$lib/styles/ocean.css";

  let { children } = $props();
</script>

<div class="app-shell">
  <!-- Header / Navigation Bar (inspired by the gray title bar in the mockup) -->
  <header class="header">
    <nav class="nav">
      <a href="/" class="logo">
        <span class="logo-wave">🌊</span>
        <span class="logo-text">Ocean App</span>
      </a>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/play" class="nav-link">Play</a>
      </div>
    </nav>
  </header>

  <!-- Main Content -->
  <main class="main-content">
    {@render children()}
  </main>

  <!-- Footer -->
  <footer class="footer">
    <p>~ Beneath the waves ~</p>
  </footer>
</div>

<!--
  SCOPED STYLES:
  Everything inside this <style> block is automatically scoped
  to THIS component only. SvelteKit adds unique class hashes
  so these styles won't affect child pages/components.
-->
<style>
  .app-shell {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    background: var(--gradient-ocean);
    background-attachment: fixed;
  }

  .header {
    /*
     * Matches the gray metallic title bar from the mockup image.
     * Uses a subtle gradient and bottom border for depth.
     */
    background: var(--gradient-header);
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-sm) var(--space-md);
    max-width: var(--content-max-width);
    margin: 0 auto;
    width: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  .logo-wave {
    font-size: 1.4rem;
  }

  .logo-text {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: bold;
    font-size: 1.2rem;
    color: #2c2c2c;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  .nav-links {
    display: flex;
    gap: var(--space-md);
  }

  .nav-link {
    font-size: 0.95rem;
    font-weight: 600;
    color: #333;
    padding: var(--space-xs) var(--space-sm);
    border-radius: 8px;
    transition: background 0.2s, color 0.2s;
  }

  .nav-link:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #111;
  }

  .main-content {
    flex: 1;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: var(--space-lg) var(--space-md);
  }

  .footer {
    text-align: center;
    padding: var(--space-md);
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.35);
    font-style: italic;
  }

  /* Responsive adjustments */
  @media (min-width: 768px) {
    .nav {
      padding: var(--space-md) var(--space-lg);
    }

    .logo-text {
      font-size: 1.4rem;
    }

    .nav-link {
      font-size: 1.05rem;
      padding: var(--space-xs) var(--space-md);
    }

    .main-content {
      padding: var(--space-xl) var(--space-lg);
    }
  }
</style>