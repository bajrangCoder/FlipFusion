<script>
	export let onRestart;
	export let onBack;
	import ParticleRain from './ParticleRain.svelte';
</script>

<div>
	<h1>You lost! 💩</h1>
	 <ParticleRain particles={50} color='white' duration={5} />
	<button on:click={onRestart}>Play again</button>
	<button style="margin-top: 1.4rem;" on:click={onBack}>Back</button>
</div>

<style>
</style>
