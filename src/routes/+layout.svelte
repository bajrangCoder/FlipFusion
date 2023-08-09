<script>
	import '../app.css';
	export const ssr = false;
</script>

<svelte:head>
	<title>FlipFusion Game</title>
	<meta name="description" content="A fun and challenging matching card game" />
	<meta
		name="keywords"
		content="matching game, card game, memory game, emoji game, svelte game, online game"
	/>
	<meta name="author" content="Raunak Raj" />
	<meta property="og:title" content="FlipFusion" />
	<meta property="og:description" content="A fun and challenging matching card game" />
	<meta property="og:image" content="path_to_your_thumbnail_image" />
	<meta property="og:url" content="https://github.com/bajrangCoder/FlipFusion" />
	<meta property="og:type" content="website" />
</svelte:head>
<slot />
