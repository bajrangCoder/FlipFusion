<script>
  export let duration = 3; // Animation duration in seconds
</script>

<style>
  .cheerful-animation {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
  }

  .petal {
    position: absolute;
    width: 10px;
    height: 20px;
    background-color: red;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation: fall linear infinite;
    transform-origin: bottom center;
  }

  @keyframes fall {
    0% {
      transform: translateY(-10%) rotate(0deg);
      opacity: 0;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 1;
    }
  }
</style>

<div class="cheerful-animation">
  {#each Array.from({ length: 20 }) as _, i}
    <div class="petal" style="left: {Math.random() * 100}%; animation-delay: {i * 0.2}s; animation-duration: {duration}s;"></div>
  {/each}
</div>
