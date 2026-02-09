<script>
  const creatures = [
    { emoji: '🐙', name: 'Octopus', fact: 'Has three hearts and blue blood' },
    { emoji: '🐠', name: 'Tropical Fish', fact: 'Can recognize themselves' },
    { emoji: '🦈', name: 'Shark', fact: 'Been around for 400 million years' },
    { emoji: '🐚', name: 'Seashell', fact: 'Home to many sea creatures' },
    { emoji: '🦑', name: 'Squid', fact: 'Has the largest eyes in the animal kingdom' },
    { emoji: '🦐', name: 'Shrimp', fact: 'Can only swim backwards' },
  ];
</script>

<div class="home">
  <section class="hero">
    <h1 class="title">
      <span class="title-wave">Dive into the</span>
      <span class="title-deep">Deep Blue</span>
    </h1>
    <p class="subtitle">
      Explore the wonders of the ocean through our interactive experience
    </p>
    <div class="cta-buttons">
      <a href="/play" class="btn btn-primary">
        <span>🎮</span> Play Games
      </a>
    </div>
  </section>

  <section class="features">
    <h2 class="section-title">Sea Creatures</h2>
    <div class="creature-grid">
      {#each creatures as creature}
        <div class="creature-card">
          <span class="creature-emoji">{creature.emoji}</span>
          <h3 class="creature-name">{creature.name}</h3>
          <p class="creature-fact">{creature.fact}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="ocean-facts">
    <h2 class="section-title">Ocean Facts</h2>
    <div class="facts-container">
      <div class="fact-card">
        <span class="fact-number">71%</span>
        <p class="fact-text">of Earth's surface is covered by oceans</p>
      </div>
      <div class="fact-card">
        <span class="fact-number">80%</span>
        <p class="fact-text">of ocean life remains undiscovered</p>
      </div>
      <div class="fact-card">
        <span class="fact-number">36,000ft</span>
        <p class="fact-text">deepest point in the Mariana Trench</p>
      </div>
    </div>
  </section>
</div>

<style>
  .home {
    position: relative;
    z-index: 1;
    padding-bottom: 4rem;
  }

  .hero {
    text-align: center;
    padding: 4rem 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .title {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .title-wave {
    display: block;
    color: var(--ocean-foam);
  }

  .title-deep {
    display: block;
    color: var(--ocean-light);
    background: linear-gradient(
      90deg,
      var(--ocean-bright),
      var(--ocean-foam),
      var(--sand)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--ocean-bright);
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--ocean-foam), var(--ocean-surface));
    color: var(--ocean-deep);
    border: none;
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(72, 202, 228, 0.4);
  }

  .section-title {
    text-align: center;
    font-size: 2rem;
    color: var(--ocean-foam);
    margin-bottom: 2rem;
  }

  .features {
    padding: 3rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .creature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .creature-card {
    background: rgba(30, 96, 145, 0.3);
    border: 1px solid var(--ocean-foam);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .creature-card:hover {
    transform: translateY(-5px);
    background: rgba(30, 96, 145, 0.5);
    box-shadow: 0 10px 40px rgba(72, 202, 228, 0.2);
  }

  .creature-emoji {
    font-size: 4rem;
    display: block;
    margin-bottom: 1rem;
  }

  .creature-name {
    font-size: 1.3rem;
    color: var(--ocean-light);
    margin-bottom: 0.5rem;
  }

  .creature-fact {
    color: var(--ocean-bright);
    font-size: 0.95rem;
    opacity: 0.9;
  }

  .ocean-facts {
    padding: 3rem 2rem;
    background: rgba(10, 22, 40, 0.5);
  }

  .facts-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: 0 auto;
  }

  .fact-card {
    text-align: center;
    padding: 2rem;
    min-width: 200px;
  }

  .fact-number {
    font-size: 3rem;
    font-weight: bold;
    color: var(--sand);
    display: block;
    margin-bottom: 0.5rem;
  }

  .fact-text {
    color: var(--ocean-bright);
    font-size: 1rem;
  }
</style>