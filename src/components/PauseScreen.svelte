<script>
	export let onResume;
	export let onExit;
</script>

<h1>Game paused</h1>
<button on:click={onResume}>Resume</button>
<button on:click={onExit}>Exit</button>
