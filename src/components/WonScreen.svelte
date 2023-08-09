<script>
	export let onPlay;
	export let onBack;
</script>

<div>
	<h1>You won! 🎉</h1>
	<button on:click={onPlay}>Play again</button>
	<button style="margin-top: 1.4rem;" on:click={onBack}>Back</button>
</div>

<style>
</style>
