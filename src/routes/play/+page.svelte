<!-- src/routes/play/+page.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  // --- Game Constants ---
  const CELL_SIZE = 20;
  const TICK_MS = 130;

  // --- Game State ---
  type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
  type Point = { x: number; y: number };

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  let gridW = $state(20);
  let gridH = $state(20);

  let snake: Point[] = $state([]);
  let food: Point = $state({ x: 10, y: 10 });
  let direction: Direction = $state("RIGHT");
  let nextDirection: Direction = $state("RIGHT");
  let score = $state(0);
  let highScore = $state(0);
  let gameRunning = $state(false);
  let gameOver = $state(false);
  let intervalId: ReturnType<typeof setInterval> | null = null;

  // --- Responsive canvas sizing ---
  function getCanvasSize(): number {
    if (!browser) return 400;
    const vw = window.innerWidth;
    if (vw < 480) return Math.floor((vw - 40) / CELL_SIZE) * CELL_SIZE;
    if (vw < 768) return Math.floor(400 / CELL_SIZE) * CELL_SIZE;
    return Math.floor(500 / CELL_SIZE) * CELL_SIZE;
  }

  function resizeCanvas() {
    const size = getCanvasSize();
    gridW = size / CELL_SIZE;
    gridH = size / CELL_SIZE;
    if (canvas) {
      canvas.width = size;
      canvas.height = size;
    }
  }

  // --- Game Logic ---
  function resetGame() {
    const midX = Math.floor(gridW / 2);
    const midY = Math.floor(gridH / 2);
    snake = [
      { x: midX, y: midY },
      { x: midX - 1, y: midY },
      { x: midX - 2, y: midY },
    ];
    direction = "RIGHT";
    nextDirection = "RIGHT";
    score = 0;
    gameOver = false;
    placeFood();
  }

  function placeFood() {
    let pos: Point;
    do {
      pos = {
        x: Math.floor(Math.random() * gridW),
        y: Math.floor(Math.random() * gridH),
      };
    } while (snake.some((s) => s.x === pos.x && s.y === pos.y));
    food = pos;
  }

  function tick() {
    direction = nextDirection;
    const head = { ...snake[0] };

    switch (direction) {
      case "UP":
        head.y--;
        break;
      case "DOWN":
        head.y++;
        break;
      case "LEFT":
        head.x--;
        break;
      case "RIGHT":
        head.x++;
        break;
    }

    // Wall collision
    if (head.x < 0 || head.x >= gridW || head.y < 0 || head.y >= gridH) {
      endGame();
      return;
    }

    // Self collision
    if (snake.some((s) => s.x === head.x && s.y === head.y)) {
      endGame();
      return;
    }

    snake.unshift(head);

    // Eat food
    if (head.x === food.x && head.y === food.y) {
      score++;
      placeFood();
    } else {
      snake.pop();
    }

    // Force reactivity
    snake = [...snake];
    draw();
  }

  function endGame() {
    gameRunning = false;
    gameOver = true;
    if (score > highScore) {
      highScore = score;
      if (browser) {
        localStorage.setItem("ocean-snake-high", String(highScore));
      }
    }
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function startGame() {
    resizeCanvas();
    resetGame();
    gameRunning = true;
    gameOver = false;
    draw();
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(tick, TICK_MS);
  }

  // --- Drawing ---
  function draw() {
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;

    // Ocean background
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, "#1a4a6e");
    grad.addColorStop(0.5, "#14375a");
    grad.addColorStop(1, "#0b1e3d");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Grid lines (subtle)
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= gridW; x++) {
      ctx.beginPath();
      ctx.moveTo(x * CELL_SIZE, 0);
      ctx.lineTo(x * CELL_SIZE, h);
      ctx.stroke();
    }
    for (let y = 0; y <= gridH; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * CELL_SIZE);
      ctx.lineTo(w, y * CELL_SIZE);
      ctx.stroke();
    }

    // Food (glowing orb)
    const fx = food.x * CELL_SIZE + CELL_SIZE / 2;
    const fy = food.y * CELL_SIZE + CELL_SIZE / 2;
    const foodGrad = ctx.createRadialGradient(fx, fy, 2, fx, fy, CELL_SIZE);
    foodGrad.addColorStop(0, "#ff8888");
    foodGrad.addColorStop(0.6, "#ff6b6b");
    foodGrad.addColorStop(1, "rgba(255,107,107,0)");
    ctx.fillStyle = foodGrad;
    ctx.beginPath();
    ctx.arc(fx, fy, CELL_SIZE * 0.7, 0, Math.PI * 2);
    ctx.fill();

    // Food core
    ctx.fillStyle = "#ff6b6b";
    ctx.beginPath();
    ctx.arc(fx, fy, CELL_SIZE * 0.35, 0, Math.PI * 2);
    ctx.fill();

    // Snake
    snake.forEach((seg, i) => {
      const sx = seg.x * CELL_SIZE;
      const sy = seg.y * CELL_SIZE;
      const ratio = 1 - i / (snake.length + 5);

      if (i === 0) {
        // Head - brighter
        ctx!.fillStyle = "#5eefc2";
        ctx!.shadowColor = "#5eefc2";
        ctx!.shadowBlur = 10;
      } else {
        ctx!.fillStyle = `rgba(45, 138, 110, ${0.4 + ratio * 0.6})`;
        ctx!.shadowBlur = 0;
      }

      const pad = i === 0 ? 1 : 2;
      ctx!.beginPath();
      ctx!.roundRect(
        sx + pad,
        sy + pad,
        CELL_SIZE - pad * 2,
        CELL_SIZE - pad * 2,
        4
      );
      ctx!.fill();
      ctx!.shadowBlur = 0;
    });

    // Eyes on head
    if (snake.length > 0) {
      const head = snake[0];
      const hx = head.x * CELL_SIZE;
      const hy = head.y * CELL_SIZE;
      ctx.fillStyle = "#fff";
      let e1x: number, e1y: number, e2x: number, e2y: number;

      switch (direction) {
        case "RIGHT":
          e1x = hx + 13;
          e1y = hy + 5;
          e2x = hx + 13;
          e2y = hy + 14;
          break;
        case "LEFT":
          e1x = hx + 6;
          e1y = hy + 5;
          e2x = hx + 6;
          e2y = hy + 14;
          break;
        case "UP":
          e1x = hx + 5;
          e1y = hy + 6;
          e2x = hx + 14;
          e2y = hy + 6;
          break;
        case "DOWN":
          e1x = hx + 5;
          e1y = hy + 13;
          e2x = hx + 14;
          e2y = hy + 13;
          break;
      }

      ctx.beginPath();
      ctx.arc(e1x!, e1y!, 2.5, 0, Math.PI * 2);
      ctx.arc(e2x!, e2y!, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // --- Input Handling ---
  function handleKey(e: KeyboardEvent) {
    if (!gameRunning) return;
    const map: Record<string, Direction> = {
      ArrowUp: "UP",
      ArrowDown: "DOWN",
      ArrowLeft: "LEFT",
      ArrowRight: "RIGHT",
      w: "UP",
      s: "DOWN",
      a: "LEFT",
      d: "RIGHT",
    };
    const nd = map[e.key];
    if (!nd) return;

    e.preventDefault();

    const opposites: Record<Direction, Direction> = {
      UP: "DOWN",
      DOWN: "UP",
      LEFT: "RIGHT",
      RIGHT: "LEFT",
    };
    if (opposites[nd] !== direction) {
      nextDirection = nd;
    }
  }

  // --- Touch / Swipe Support ---
  let touchStartX = 0;
  let touchStartY = 0;

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }

  function handleTouchEnd(e: TouchEvent) {
    if (!gameRunning) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) < 20) return;

    let nd: Direction;
    if (absDx > absDy) {
      nd = dx > 0 ? "RIGHT" : "LEFT";
    } else {
      nd = dy > 0 ? "DOWN" : "UP";
    }

    const opposites: Record<Direction, Direction> = {
      UP: "DOWN",
      DOWN: "UP",
      LEFT: "RIGHT",
      RIGHT: "LEFT",
    };
    if (opposites[nd] !== direction) {
      nextDirection = nd;
    }
  }

  // --- D-pad controls for mobile ---
  function dpadPress(dir: Direction) {
    if (!gameRunning) return;
    const opposites: Record<Direction, Direction> = {
      UP: "DOWN",
      DOWN: "UP",
      LEFT: "RIGHT",
      RIGHT: "LEFT",
    };
    if (opposites[dir] !== direction) {
      nextDirection = dir;
    }
  }

  // --- Lifecycle ---
  onMount(() => {
    highScore = Number(localStorage.getItem("ocean-snake-high") || 0);
    ctx = canvas.getContext("2d");
    resizeCanvas();
    resetGame();
    draw();

    const onResize = () => {
      if (!gameRunning) {
        resizeCanvas();
        resetGame();
        draw();
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (intervalId) clearInterval(intervalId);
    };
  });
</script>

<svelte:head>
  <title>Ocean App - Play</title>
</svelte:head>

<svelte:window
  onkeydown={handleKey}
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
/>

<div class="play-page">
  <h1 class="page-title">🐍 Sea Serpent</h1>

  <!-- Score Display -->
  <div class="score-bar">
    <div class="score-item">
      <span class="score-label">Score</span>
      <span class="score-value">{score}</span>
    </div>
    <div class="score-item">
      <span class="score-label">Best</span>
      <span class="score-value best">{highScore}</span>
    </div>
  </div>

  <!-- Game Canvas -->
  <div class="canvas-wrapper">
    <canvas bind:this={canvas}></canvas>

    <!-- Overlay States -->
    {#if !gameRunning && !gameOver}
      <div class="overlay">
        <p class="overlay-text">Guide the serpent. Eat the orbs.</p>
        <button class="game-btn" onclick={startGame}>🌊 Dive In</button>
        <p class="controls-hint">
          Arrow keys / WASD / Swipe / D-Pad
        </p>
      </div>
    {/if}

    {#if gameOver}
      <div class="overlay game-over">
        <p class="overlay-title">☠️ Shipwrecked!</p>
        <p class="overlay-score">Score: {score}</p>
        {#if score === highScore && score > 0}
          <p class="new-record">🏆 New Record!</p>
        {/if}
        <button class="game-btn" onclick={startGame}>
          Try Again
        </button>
      </div>
    {/if}
  </div>

  <!-- D-Pad for mobile -->
  <div class="dpad" aria-label="Directional controls">
    <button class="dpad-btn up" onclick={() => dpadPress("UP")}>▲</button>
    <div class="dpad-row">
      <button class="dpad-btn left" onclick={() => dpadPress("LEFT")}>
        ◀
      </button>
      <div class="dpad-center"></div>
      <button class="dpad-btn right" onclick={() => dpadPress("RIGHT")}>
        ▶
      </button>
    </div>
    <button class="dpad-btn down" onclick={() => dpadPress("DOWN")}>
      ▼
    </button>
  </div>
</div>

<style>
  .play-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
  }

  .page-title {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 6vw, 2.2rem);
    text-align: center;
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }

  /* Score bar */
  .score-bar {
    display: flex;
    gap: var(--space-xl);
    justify-content: center;
  }

  .score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .score-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.5);
  }

  .score-value {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--ocean-surface);
  }

  .score-value.best {
    color: var(--ocean-sand);
  }

  /* Canvas area */
  .canvas-wrapper {
    position: relative;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    overflow: hidden;
    box-shadow:
      0 0 40px rgba(74, 140, 184, 0.15),
      inset 0 0 30px rgba(0, 0, 0, 0.2);
    line-height: 0;
  }

  canvas {
    display: block;
    border-radius: 10px;
  }

  /* Overlays */
  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-md);
    background: rgba(11, 30, 61, 0.88);
    backdrop-filter: blur(6px);
    border-radius: 10px;
  }

  .overlay-text {
    font-size: clamp(0.9rem, 3vw, 1.1rem);
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding: 0 var(--space-md);
  }

  .overlay-title {
    font-size: clamp(1.3rem, 5vw, 1.8rem);
    font-weight: 700;
  }

  .overlay-score {
    font-size: 1.2rem;
    color: var(--ocean-surface);
  }

  .new-record {
    font-size: 1rem;
    color: var(--ocean-sand);
    animation: shimmer 1.5s ease-in-out infinite;
  }

  .controls-hint {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.35);
  }

  .game-btn {
    padding: var(--space-sm) var(--space-xl);
    background: linear-gradient(135deg, #2d8a6e, #4a8cb8);
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 30px;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .game-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 25px rgba(45, 138, 110, 0.4);
  }

  .game-btn:active {
    transform: scale(0.97);
  }

  /* D-Pad */
  .dpad {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-top: var(--space-sm);
  }

  .dpad-row {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .dpad-btn {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    touch-action: manipulation;
  }

  .dpad-btn:active {
    background: rgba(255, 255, 255, 0.25);
  }

  .dpad-center {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
  }

  /* Hide d-pad on desktop (keyboard available) */
  @media (min-width: 768px) {
    .dpad {
      display: none;
    }
  }

  /* Smaller screens: tighter spacing */
  @media (max-width: 400px) {
    .dpad-btn {
      width: 46px;
      height: 46px;
      font-size: 1rem;
    }

    .dpad-center {
      width: 46px;
      height: 46px;
    }
  }
</style>