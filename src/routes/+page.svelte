<script>
  import { goto } from "$app/navigation";
</script>

<div class="page">
  <div class="header">Ocean App</div>

  <div class="card">
    <h2>Welcome</h2>
    <p>
      Drift into a calm ocean-inspired experience. Tap below
      to play a simple game of Snake.
    </p>

    <button on:click={() => goto("/play")}>
      Play Snake
    </button>
  </div>
</div>