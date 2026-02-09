<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from "svelte";

  interface Bubble {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
  }

  let bubbles: Bubble[] = $state([]);

  onMount(() => {
    bubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 30 + 10,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
    }));
  });
</script>

<svelte:head>
  <title>Ocean App - Home</title>
</svelte:head>

<div class="home">
  <!-- Decorative bubbles background -->
  <div class="bubbles-container" aria-hidden="true">
    {#each bubbles as bubble (bubble.id)}
      <div
        class="bubble"
        style:left="{bubble.left}%"
        style:width="{bubble.size}px"
        style:height="{bubble.size}px"
        style:animation-duration="{bubble.duration}s"
        style:animation-delay="{bubble.delay}s"
      ></div>
    {/each}
  </div>

  <!-- Hero Section -->
  <section class="hero bubble-float">
    <h1 class="hero-title">🌊 Dive In</h1>
    <p class="hero-subtitle">
      Explore the depths of the ocean and challenge yourself with an
      underwater snake adventure.
    </p>
  </section>

  <!-- Feature Cards -->
  <div class="cards">
    <div class="ocean-card card">
      <div class="card-icon">🐠</div>
      <h2>Explore</h2>
      <p>Discover the beauty hidden beneath the waves.</p>
    </div>

    <div class="ocean-card card">
      <div class="card-icon">🐍</div>
      <h2>Play</h2>
      <p>Guide your sea serpent through the ocean depths.</p>
      <a href="/play" class="play-btn">Start Game</a>
    </div>

    <div class="ocean-card card">
      <div class="card-icon">🏆</div>
      <h2>Compete</h2>
      <p>Beat your high score and become the ocean champion.</p>
    </div>
  </div>

  <!-- Wave decoration -->
  <div class="wave-decoration" aria-hidden="true">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
        fill="rgba(255,255,255,0.05)"
      />
    </svg>
  </div>
</div>

<!--
  SCOPED STYLES for the Home page only.
  These styles will not affect the Play page or Layout.
-->
<style>
  .home {
    position: relative;
    overflow: hidden;
  }

  /* Animated bubbles */
  .bubbles-container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .bubble {
    position: absolute;
    bottom: -50px;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.2),
      rgba(126, 200, 227, 0.08)
    );
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: rise linear infinite;
  }

  @keyframes rise {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0.6;
    }
    100% {
      transform: translateY(-100vh) scale(0.5);
      opacity: 0;
    }
  }

  /* Hero */
  .hero {
    text-align: center;
    padding: var(--space-2xl) var(--space-md);
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 8vw, 3.5rem);
    margin-bottom: var(--space-md);
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  }

  .hero-subtitle {
    font-size: clamp(0.95rem, 3vw, 1.15rem);
    max-width: 500px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.7;
  }

  /* Cards grid */
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);
    position: relative;
    z-index: 1;
    margin-top: var(--space-lg);
  }

  @media (min-width: 600px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card {
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  }

  .card-icon {
    font-size: 2.5rem;
    margin-bottom: var(--space-sm);
  }

  .card h2 {
    font-size: 1.2rem;
    margin-bottom: var(--space-xs);
    color: var(--ocean-surface);
  }

  .card p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .play-btn {
    display: inline-block;
    margin-top: var(--space-md);
    padding: var(--space-sm) var(--space-lg);
    background: linear-gradient(135deg, var(--ocean-light), var(--ocean-kelp));
    color: white;
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .play-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(74, 140, 184, 0.4);
  }

  /* Wave SVG */
  .wave-decoration {
    margin-top: var(--space-2xl);
    position: relative;
    z-index: 1;
  }

  .wave-decoration svg {
    display: block;
    width: 100%;
    height: 60px;
  }
</style>