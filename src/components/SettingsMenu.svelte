<script lang="ts">
	export let open;
	export let levels;
	export let currentLevel;
	export let onChangeLevel;
	export let cardModes;
	export let currentCardMode;
	export let onChangeCardMode;

	function handleChangeLevel(event: Event) {
		const levelLabel = (event.target as HTMLSelectElement).value;
		const levelObj = levels.find((level) => level.label === levelLabel);
		onChangeLevel(levelObj);
	}

	function handleChangeCardMode(event: Event) {
		const modeLabel = (event.target as HTMLSelectElement).value;
		const modeObj = cardModes.find((mode) => mode.label === modeLabel);
		onChangeCardMode(modeObj);
	}
</script>

<div class="settings-menu" class:open>
	<h3>Settings</h3>
	<hr />
	<table>
		<tr>
			<th>Level</th>
			<td>
				<select on:change={handleChangeLevel}>
					{#each levels as level}
						<option value={level.label} selected={level.label === currentLevel.label}
							>{level.label}</option
						>
					{/each}
				</select>
			</td>
		</tr>
		<tr>
			<th>Card Mode</th>
			<td>
				<select on:change={handleChangeCardMode}>
					{#each cardModes as mode}
						<option value={mode.label} selected={mode.label === currentCardMode.label}
							>{mode.label}</option
						>
					{/each}
				</select>
			</td>
		</tr>
	</table>
	<hr />
	<p>Developed by Raunak Raj</p>
</div>

<style>
	.settings-menu {
		position: absolute;
		top: 2.2rem;
		right: 1.5rem;
		background-color: var(--bg-2);
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		z-index: 2;
		border-radius: 10px;
		width: 100%;
		min-width: 55vw;
		transform-origin: top right;
		transition: transform 0.3s ease-in-out;
		transform: scale(0);
		opacity: 0;
	}
	.open {
		transform: scale(1);
		opacity: 1;
	}
	hr {
		border: none;
		border-bottom: 1px solid hsl(220, 27.2%, 30.4%);
		margin-bottom: 0.6rem;
	}
	table {
		width: 100%;
	}

	th {
		text-align: left;
		padding: 0.5rem 0;
		font-size: 1.2rem;
	}

	td {
		padding: 0.5rem 0;
	}
	select {
		width: 100%;
		padding: 0.25rem;
		color: inherit;
		background: none;
		border-radius: 8px;
		border: none;
		text-transform: uppercase;
		cursor: pointer;
		font-weight: 900;
		outline: none;
		border: 1px solid hsl(220, 27.2%, 30.4%);
		transition: border 0.3s ease;
		&:hover {
			border: 1px solid var(--border);
		}
	}
	p {
		text-align: center;
		font-weight: 100;
		font-size: 0.8rem;
		color: var(--pulse);
	}
</style>
