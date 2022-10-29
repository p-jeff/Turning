<script>
	import Appearing from './appearing.svelte';
	import SelectionEntry from './selectionEntry.svelte';

	let animDirection,
		scrollSensitivity = 100,
		settings = false,
		chosen = false;

	let content = [
		{ id: 1, name: 'Appear', content: ['Content', 'Content', 'Content', 'Content', 'Content'] },
		{ id: 2, name: 'Entry2', content: ['Content', 'Content', 'Content', 'Content', 'Content'] },
		{ id: 3, name: 'Entry3', content: ['Content', 'Content', 'Content', 'Content', 'Content'] },
		{ id: 4, name: 'Entry4', content: ['Content', 'Content', 'Content', 'Content', 'Content'] },
		{ id: 5, name: 'Entry5', content: ['Content', 'Content', 'Content', 'Content', 'Content'] },
		{ id: 6, name: 'Entry6', content: ['Content', 'Content', 'Content', 'Content', 'Content'] },
		{ id: 7, name: 'Entry7', content: ['Content', 'Content', 'Content', 'Content', 'Content'] },
		{ id: 8, name: 'Entry8', content: ['Content', 'Content', 'Content', 'Content', 'Content'] }
	];
	let selected = content.pop();

	function changeSelection(direction) {
		if (direction === 'up') {
			content.push(selected);
			selected = content.shift();
			content = content;
			animDirection = 'up';
		}
		if (direction === 'down') {
			content.unshift(selected);
			selected = content.pop();
			content = content;
			animDirection = 'down';
		}
	}

	function handleScroll(event) {
		console.log(event.wheelDelta);
		if (event.wheelDelta > scrollSensitivity) {
			changeSelection('down');
		} else if (event.wheelDelta <= scrollSensitivity * -1) {
			changeSelection('up');
		} else {
		}
	}

	function handleKeydown(event) {
		if (event.key === 'Backspace') {
			settings = !settings;
		}
		if (event.key === 'ArrowUp') {
			changeSelection('up');
		}
		if (event.key === 'ArrowDown') {
			changeSelection('down');
		}
		if (event.key === 'Enter') {
			chosen = !chosen;
			chosen = chosen;
			console.log(chosen);
		}
	}
</script>

<svelte:window on:mousewheel={handleScroll} on:keydown={handleKeydown} />

<div>
	{#each content as entry, i}
		<SelectionEntry name={entry.name} {i} {animDirection} />
	{/each}

	<table>
		<tr>
			<td style:max-width="270px">
				<h2
					class="selected"
					style:margin-left="{content.length * 30 - 80}px"
					style:font-size="{content.length * 6}px"
				>
					{selected.name}
				</h2>
			</td>

			{#if chosen}
				{#each selected.content as tag, i}
					<td>
						<Appearing {tag} {i} />
					</td>
				{/each}
			{:else}
				{#each selected.content as tag}
					<td />
				{/each}{/if}
		</tr>
	</table>
</div>

{#if settings}
	<label>
		Scroll {scrollSensitivity}
		<input type="range" min="0" max="300" step="10" bind:value={scrollSensitivity} />
	</label>
{/if}

<style>
	div {
		overflow: hidden;
		width: 100%;
	}

	.selected {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		max-width: 15%;
		max-height: 50px;
		margin: auto;
	}
	table {
		width: 100%;
	}
	td {
		width: 10%;
		border: 2px solid white;
		padding: 0px;
		height: 80px;
	}

	label {
		position: absolute;
		top: 2%;
		right: 2%;
		color: white;
	}
	.content {
		text-align: center;
	}
</style>
