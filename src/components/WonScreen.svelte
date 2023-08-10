<script>
	export let onPlay;
	export let onBack;
	import ParticleRain from './ParticleRain.svelte';
</script>

<div>
	<h1>You won! 🎉</h1>
    <ParticleRain particles={50} color='red' duration={3} />
	  
	<button on:click={onPlay}>Play again</button>
	<button style="margin-top: 1.4rem;" on:click={onBack}>Back</button>
</div>

<style>
</style>
