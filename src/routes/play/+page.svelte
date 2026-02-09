<script>
  import { onMount } from 'svelte';

  const GRID_SIZE = 20;
  const CELL_SIZE = 20;
  const INITIAL_SPEED = 150;

  let canvas;
  let ctx;
  let snake = [{ x: 10, y: 10 }];
  let food = { x: 15, y: 10 };
  let direction = { x: 1, y: 0 };
  let nextDirection = { x: 1, y: 0 };
  let score = 0;
  let highScore = 0;
  let gameLoop;
  let isPlaying = false;
  let isGameOver = false;
  let speed = INITIAL_SPEED;

  onMount(() => {
    ctx = canvas.getContext('2d');
    drawGrid();
    drawStartScreen();

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (gameLoop) clearInterval(gameLoop);
    };
  });

  function handleKeyDown(e) {
    if (!isPlaying && !isGameOver) {
      startGame();
      return;
    }

    if (isGameOver) {
      resetGame();
      return;
    }

    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        if (direction.y !== 1) nextDirection = { x: 0, y: -1 };
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        if (direction.y !== -1) nextDirection = { x: 0, y: 1 };
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        if (direction.x !== 1) nextDirection = { x: -1, y: 0 };
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        if (direction.x !== -1) nextDirection = { x: 1, y: 0 };
        break;
    }
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    gameLoop = setInterval(update, speed);
  }

  function resetGame() {
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    score = 0;
    speed = INITIAL_SPEED;
    isGameOver = false;
    spawnFood();
    startGame();
  }

  function update() {
    direction = nextDirection;

    const head = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y,
    };

    // Check wall collision
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE
    ) {
      gameOver();
      return;
    }

    // Check self collision
    for (const segment of snake) {
      if (head.x === segment.x && head.y === segment.y) {
        gameOver();
        return;
      }
    }

    snake.unshift(head);

    // Check food collision
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      if (score > highScore) highScore = score;
      spawnFood();

      // Increase speed every 50 points
      if (score % 50 === 0 && speed > 50) {
        speed -= 10;
        clearInterval(gameLoop);
        gameLoop = setInterval(update, speed);
      }
    } else {
      snake.pop();
    }

    draw();
  }

  function spawnFood() {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      snake.some((s) => s.x === newFood.x && s.y === newFood.y)
    );
    food = newFood;
  }

  function gameOver() {
    isPlaying = false;
    isGameOver = true;
    clearInterval(gameLoop);
    drawGameOver();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    // Draw food (fish)
    ctx.font = `${CELL_SIZE - 2}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      '🐟',
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2
    );

    // Draw snake (sea snake)
    snake.forEach((segment, index) => {
      if (index === 0) {
        // Head
        ctx.fillText(
          '🐍',
          segment.x * CELL_SIZE + CELL_SIZE / 2,
          segment.y * CELL_SIZE + CELL_SIZE / 2
        );
      } else {
        // Body
        const alpha = 1 - index * 0.03;
        ctx.fillStyle = `rgba(45, 106, 79, ${alpha})`;
        ctx.beginPath();
        ctx.arc(
          segment.x * CELL_SIZE + CELL_SIZE / 2,
          segment.y * CELL_SIZE + CELL_SIZE / 2,
          CELL_SIZE / 2 - 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    });
  }

  function drawGrid() {
    ctx.fillStyle = 'rgba(10, 22, 40, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(72, 202, 228, 0.1)';
    ctx.lineWidth = 1;

    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, canvas.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(canvas.width, i * CELL_SIZE);
      ctx.stroke();
    }
  }

  function drawStartScreen() {
    ctx.fillStyle = 'rgba(10, 22, 40, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#90e0ef';
    ctx.font = 'bold 24px Segoe UI';
    ctx.textAlign = 'center';
    ctx.fillText('🐍 Sea Snake 🐟', canvas.width / 2, canvas.height / 2 - 30);

    ctx.font = '16px Segoe UI';
    ctx.fillStyle = '#48cae4';
    ctx.fillText('Press any key to start', canvas.width / 2, canvas.height / 2 + 10);
    ctx.fillText('Use Arrow Keys or WASD to move', canvas.width / 2, canvas.height / 2 + 35);
  }

  function drawGameOver() {
    ctx.fillStyle = 'rgba(10, 22, 40, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ee6c4d';
    ctx.font = 'bold 28px Segoe UI';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2 - 30);

    ctx.fillStyle = '#90e0ef';
    ctx.font = '18px Segoe UI';
    ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 10);

    ctx.fillStyle = '#48cae4';
    ctx.font = '14px Segoe UI';
    ctx.fillText('Press any key to play again', canvas.width / 2, canvas.height / 2 + 45);
  }
</script>

<div class="play-page">
  <div class="game-container">
    <h1 class="game-title">🐍 Sea Snake 🐟</h1>
    <p class="game-subtitle">Help the sea snake catch fish in the ocean!</p>

    <div class="score-board">
      <div class="score-item">
        <span class="score-label">Score</span>
        <span class="score-value">{score}</span>
      </div>
      <div class="score-item">
        <span class="score-label">High Score</span>
        <span class="score-value">{highScore}</span>
      </div>
    </div>

    <div class="canvas-wrapper">
      <canvas
        bind:this={canvas}
        width={GRID_SIZE * CELL_SIZE}
        height={GRID_SIZE * CELL_SIZE}
        class="game-canvas"
      ></canvas>
    </div>

    <div class="controls-info">
      <div class="control-group">
        <span class="key">↑</span>
        <span class="key">↓</span>
        <span class="key">←</span>
        <span class="key">→</span>
        <span class="control-text">or</span>
        <span class="key">W</span>
        <span class="key">A</span>
        <span class="key">S</span>
        <span class="key">D</span>
      </div>
      <p class="control-text">to move the snake</p>
    </div>

    <div class="game-tips">
      <h3>🌊 Tips:</h3>
      <ul>
        <li>Catch fish 🐟 to grow and score points</li>
        <li>Avoid hitting walls and yourself</li>
        <li>Speed increases as you score more!</li>
      </ul>
    </div>
  </div>
</div>

<style>
  .play-page {
    position: relative;
    z-index: 1;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .game-container {
    text-align: center;
    background: rgba(10, 22, 40, 0.7);
    border-radius: 30px;
    padding: 2rem;
    border: 2px solid var(--ocean-foam);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  .game-title {
    font-size: 2.5rem;
    color: var(--ocean-light);
    margin-bottom: 0.5rem;
  }

  .game-subtitle {
    color: var(--ocean-bright);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .score-board {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 1.5rem;
  }

  .score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .score-label {
    font-size: 0.9rem;
    color: var(--ocean-bright);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .score-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--sand);
  }

  .canvas-wrapper {
    display: inline-block;
    border: 3px solid var(--ocean-foam);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(72, 202, 228, 0.3);
  }

  .game-canvas {
    display: block;
  }

  .controls-info {
    margin-top: 1.5rem;
  }

  .control-group {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  .key {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: var(--ocean-surface);
    border: 2px solid var(--ocean-foam);
    border-radius: 8px;
    color: var(--ocean-light);
    font-weight: bold;
    font-size: 0.9rem;
  }

  .control-text {
    color: var(--ocean-bright);
    margin: 0 0.5rem;
    font-size: 0.9rem;
  }

  .game-tips {
    margin-top: 1.5rem;
    text-align: left;
    background: rgba(30, 96, 145, 0.3);
    border-radius: 15px;
    padding: 1rem 1.5rem;
  }

  .game-tips h3 {
    color: var(--ocean-foam);
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .game-tips ul {
    list-style: none;
    padding: 0;
  }

  .game-tips li {
    color: var(--ocean-bright);
    font-size: 0.9rem;
    padding: 0.25rem 0;
  }
</style>