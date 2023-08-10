<script>
  export let particles = 50; // Number of particles
  export let color;
  export let duration;

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
</script>

<style>
  .particle-rain {
    position: absolute;
    top: -10px;
    width: 4px;
    height: 10px;
    opacity: 0.8;
    animation: raindrop 3s linear;
  }

  @keyframes raindrop {
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
</style>

{#each Array.from({ length: particles }) as _, i}
  <div class="particle-rain" style="animation-delay: {i * 0.1}s; left: {getRandom(0, 100)}%;background-color: {color};animation-iteration-count: {duration}"></div>
{/each}
