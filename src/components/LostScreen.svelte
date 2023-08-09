<script>
	export let onRestart;
	export let onBack;
</script>

<div>
	<h1>You lost! 💩</h1>
	<button on:click={onRestart}>Play again</button>
	<button style="margin-top: 1.4rem;" on:click={onBack}>Back</button>
</div>

<style>
</style>
