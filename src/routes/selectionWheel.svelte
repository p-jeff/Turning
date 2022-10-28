<script>
	import SelectionEntry from './selectionEntry.svelte';

	let animDirection;

	let content = [
		{ id: 1, name: 'Entry1' },
		{ id: 2, name: 'Entry2' },
		{ id: 3, name: 'Entry3' },
		{ id: 4, name: 'Entry4' },
		{ id: 5, name: 'Entry5' },
		{ id: 6, name: 'Entry6' },
		{ id: 7, name: 'Entry7' }
	];
	let selected = { id: 8, name: 'Entry8' };

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
		if (event.wheelDelta > 100) {
			changeSelection('down');
		} else if (event.wheelDelta <= -100) {
			changeSelection('up');
		} else {
			console.log('not scrolling enough');
		}
	}
</script>

<svelte:window on:mousewheel={handleScroll} />

<div>
	{#each content as entry, i}
		<SelectionEntry name={entry.name} {i} {animDirection} />
	{/each}

	<h2
		class="selected"
		style:margin-left="{content.length * 30 - 20}px"
		style:font-size="{content.length * 5}px"
	>
		{selected.name}
	</h2>
</div>

<style>
	div {
		overflow: hidden;
		width: 100%;
	}

	.selected {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
</style>
