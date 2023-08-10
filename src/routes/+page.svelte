<script lang="ts">
	import { emoji, foodEmoji, symbolEmoji, animalEmoji, techImg, programmingImg } from './emoji';
	import { StartScreen, PauseScreen, LostScreen, WonScreen, SettingsMenu } from '../components';

	type State = 'start' | 'playing' | 'paused' | 'won' | 'lost';
	const difficultyLevels = [
		{ label: 'Very Easy', size: 10, time: 100 },
		{ label: 'Easy', size: 16, time: 90 },
		{ label: 'Medium', size: 20, time: 60 },
		{ label: 'Hard', size: 27, time: 45 },
		{ label: 'Insane', size: 33, time: 40 }
	];
	const cardMode = [
		{ label: 'Emoji', value: emoji },
		{ label: 'Food', value: foodEmoji },
		{ label: 'Symbol', value: symbolEmoji },
		{ label: 'Animal', value: animalEmoji },
		{ label: 'Tech', value: techImg },
		{ label: 'Coding', value: programmingImg }
	];

	let selectedLevel = difficultyLevels[1];
	let selectedCardMode = cardMode[0];
	let state: State = 'start';
	let size = selectedLevel.size;
	let grid = createGrid();
	let maxMatches = grid.length / 2;
	let selected: number[] = [];
	let matches: string[] = [];
	let timerId: number | null = null;
	let time = selectedLevel.time;
	let rows = Math.ceil(selectedLevel.size / 5);
	let columns = Math.ceil(selectedLevel.size / rows);
    
    $: {
        time = selectedLevel.time;
        size = selectedLevel.size;
        grid = createGrid();
        maxMatches = grid.length / 2;
        rows = Math.ceil(size / 5);
        columns = Math.ceil(size / rows);
    }
    
	function changeDifficulty(level) {
		selectedLevel = level;
		time = level.time;
		size = level.size;
		resetGame();
	}
	function changeCardMode(mode) {
		selectedCardMode = mode;
		resetGame();
	}

	function createGrid() {
		// only want unique cards
		let cards = new Set<string>();
		// half because we duplicate the cards
		let maxSize = size / 2;
		let cardArray = selectedCardMode.value || emoji;

		while (cards.size < maxSize) {
			// pick random emoji
			const randomIndex = Math.floor(Math.random() * cardArray.length);
			cards.add(cardArray[randomIndex]);
		}

		// duplicate and shuffle cards
		return shuffle([...cards, ...cards]);
	}

	function shuffle<Items>(array: Items[]) {
		return array.sort(() => Math.random() - 0.5);
	}

	function startGameTimer() {
		function countdown() {
			state !== 'paused' && (time -= 1);
		}
		timerId = setInterval(countdown, 1000);
	}

	function selectCard(cardIndex: number) {
		selected = selected.concat(cardIndex);
	}

	function matchCards() {
		// array destructuring can have any name for the values
		const [first, second] = selected;

		if (grid[first] === grid[second]) {
			matches = matches.concat(grid[first]);
		}

		// clear selected
		setTimeout(() => (selected = []), 300);
	}

	function resetGame() {
		timerId && clearInterval(timerId);
		grid = createGrid();
		maxMatches = grid.length / 2;
		selected = [];
		matches = [];
		timerId = null;
		time = selectedLevel.time;
	}

	function gameWon() {
		state = 'won';
		resetGame();
	}

	function gameLost() {
		state = 'lost';
		resetGame();
	}

	let settingsOpen = false;

	function handleSettings() {
		settingsOpen = !settingsOpen;
	}

	$: if (state === 'playing') {
		//	in case you pause the game
		!timerId && startGameTimer();
	}

	$: selected.length === 2 && matchCards();
	$: maxMatches === matches.length && gameWon();
	$: time === 0 && gameLost();
</script>

<div class="settings-container">
	<button class="settings-button" on:click={handleSettings}>Settings</button>
	<SettingsMenu
		open={settingsOpen}
		levels={difficultyLevels}
		currentLevel={selectedLevel}
		onChangeLevel={changeDifficulty}
		cardModes={cardMode}
		currentCardMode={selectedCardMode}
		onChangeCardMode={changeCardMode}
	/>
</div>
{#if state === 'start'}
	<StartScreen onPlay={() => (state = 'playing')} />
{:else if state === 'paused'}
	<PauseScreen onResume={() => (state = 'playing')} onExit={() => (state = 'start')} />
{:else if state === 'playing'}
	<h1 class="timer" class:pulse={time <= 10}>
		{time}
	</h1>

	<div
		class="cards"
		style="grid-template-columns: repeat({columns}, 1fr); grid-template-rows: repeat({rows}, 1fr);"
	>
		{#each grid as card, cardIndex}
			{@const isSelected = selected.includes(cardIndex)}
			{@const isSelectedOrMatch = selected.includes(cardIndex) || matches.includes(card)}
			{@const match = matches.includes(card)}

			<button
				class="card"
				class:selected={isSelected}
				class:flip={isSelectedOrMatch}
				disabled={isSelectedOrMatch}
				on:click={() => selectCard(cardIndex)}
			>
				<div class="back" class:match>
					{#if selectedCardMode.label === 'Tech' || selectedCardMode.label === 'Coding'}
						<img src={card} alt="loading" />
					{:else}
						{card}
					{/if}
				</div>
			</button>
		{/each}
	</div>

	<button style="margin-top: 1.4rem;" on:click={() => (state = 'paused')}>Pause</button>
{:else if state === 'lost'}
	<LostScreen onRestart={() => (state = 'playing')} onBack={() => (state = 'start')} />
{:else if state === 'won'}
	<WonScreen onPlay={() => (state = 'playing')} onBack={() => (state = 'start')} />
{/if}

<style>
	.cards {
		display: grid;
		gap: 0.4rem;
                grid-template-columns: repeat(5, 1fr);

		@media (max-width: 768px) {
			grid-template-columns: repeat(auto-fill, minmax(calc(50% - 0.4rem), 1fr));
			grid-template-rows: auto;
		}
	}
	.card {
		height: 8vw;
		width: 8vw;
		background-color: var(--bg-2);
		transition: transform 0.3s ease-out;
		transform-style: preserve-3d;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 4rem;

		@media (max-width: 768px) {
			font-size: 2rem; /* Adjust the font size for mobile */
		}

		&.selected {
			border: 0.3vw solid var(--border); /* Adjust border thickness */
		}

		&.flip {
			transform: rotateY(180deg);
			pointer-events: none;
		}

		& .back {
			position: absolute;
			inset: 0;
			display: grid;
			place-content: center;
			backface-visibility: hidden;
			transform: rotateY(180deg);
		}

		& .match {
			transition: opacity 0.3s ease-out;
			opacity: 0.4;
			overflow: hidden; /* Prevent text from going outside */
		}
	}

	.timer {
		transition: color 0.3s ease;
	}

	.pulse {
		color: var(--pulse);
		animation: pulse 1s infinite ease;
		transform-origin: center; /* Adjust transform origin for pulse */
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}

	
	.settings-container {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.settings-button {
		font-size: 1rem;
		padding: 0.5rem 1rem;
		background-color: var(--bg-2);
		color: white;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.settings-button:hover {
		background-color: var(--border);
	}
</style>
