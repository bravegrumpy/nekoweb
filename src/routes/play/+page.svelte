<script>
  const size = 10;
  let snake = [{ x: 4, y: 4 }];
  let food = { x: 6, y: 6 };
  let dir = { x: 1, y: 0 };
  let running = true;

  function move() {
    if (!running) return;

    const head = {
      x: (snake[0].x + dir.x + size) % size,
      y: (snake[0].y + dir.y + size) % size
    };

    if (snake.some(s => s.x === head.x && s.y === head.y)) {
      running = false;
      return;
    }

    snake = [head, ...snake];

    if (head.x === food.x && head.y === food.y) {
      food = {
        x: Math.floor(Math.random() * size),
        y: Math.floor(Math.random() * size)
      };
    } else {
      snake.pop();
    }
  }

  const interval = setInterval(move, 300);

  function handleKey(e) {
    if (e.key === "ArrowUp") dir = { x: 0, y: -1 };
    if (e.key === "ArrowDown") dir = { x: 0, y: 1 };
    if (e.key === "ArrowLeft") dir = { x: -1, y: 0 };
    if (e.key === "ArrowRight") dir = { x: 1, y: 0 };
  }
</script>

<svelte:window on:keydown={handleKey} />

<div class="page">
  <div class="header">Play</div>

  <div class="card">
    <div class="grid">
      {#each Array(size) as _, y}
        {#each Array(size) as _, x}
          <div
            class="cell
              {snake.some(s => s.x === x && s.y === y)
                ? 'snake'
                : ''}
              {food.x === x && food.y === y ? 'food' : ''}"
          ></div>

        {/each}
      {/each}
    </div>

    {#if !running}
        <p>Game Over 🌊</p>
    {/if}
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 4px;
    max-width: 300px;
    margin: 0 auto;
  }

  .cell {
    aspect-ratio: 1;
    border-radius: 6px;
    background: #bde0fe;
  }

  .cell.snake {
    background: #219ebc;
  }

  .cell.food {
    background: #ffb703;
  }
</style>