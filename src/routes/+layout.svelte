<script>
  let { children } = $props();
</script>

<nav class="nav">
  <div class="nav-container">
    <a href="/" class="logo">
      <span class="wave">🌊</span>
      <span>Ocean App</span>
    </a>
    <div class="nav-links">
      <a href="/" class="nav-link">Home</a>
      <a href="/play" class="nav-link">Play</a>
    </div>
  </div>
</nav>

<div class="bubbles">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
</div>

<main class="main">
  {@render children()}
</main>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(10, 22, 40, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--ocean-foam);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--ocean-bright);
  }

  .wave {
    animation: wave 2s ease-in-out infinite;
  }

  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    75% { transform: rotate(-20deg); }
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: all 0.3s ease;
    color: var(--ocean-light);
  }

  .nav-link:hover {
    background: var(--ocean-surface);
    color: var(--ocean-foam);
  }

  .main {
    padding-top: 80px;
    min-height: 100vh;
  }

  .bubbles {
    position: fixed;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  .bubble {
    position: absolute;
    bottom: -100px;
    background: rgba(144, 224, 239, 0.1);
    border-radius: 50%;
    animation: rise 10s infinite ease-in;
  }

  .bubble:nth-child(1) {
    width: 40px;
    height: 40px;
    left: 10%;
    animation-duration: 8s;
    animation-delay: 0s;
  }

  .bubble:nth-child(2) {
    width: 20px;
    height: 20px;
    left: 30%;
    animation-duration: 12s;
    animation-delay: 2s;
  }

  .bubble:nth-child(3) {
    width: 50px;
    height: 50px;
    left: 50%;
    animation-duration: 10s;
    animation-delay: 4s;
  }

  .bubble:nth-child(4) {
    width: 30px;
    height: 30px;
    left: 70%;
    animation-duration: 14s;
    animation-delay: 1s;
  }

  .bubble:nth-child(5) {
    width: 25px;
    height: 25px;
    left: 90%;
    animation-duration: 11s;
    animation-delay: 3s;
  }

  @keyframes rise {
    0% {
      bottom: -100px;
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      bottom: 100vh;
      opacity: 0;
    }
  }
</style>