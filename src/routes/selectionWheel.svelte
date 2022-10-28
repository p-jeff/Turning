<script>
	let content = [
		{ id: 1, name: 'Entry1' },
		{ id: 2, name: 'Entry2' },
		{ id: 3, name: 'Entry3' }
	];
	let selected = { id: 4, name: 'Entry4' };

	function changeSelection(direction) {
		if (direction === 'up') {
			content.push(selected);
			selected = content.shift();
			content = content;
		}
		if (direction === 'down') {
			content.unshift(selected);
			selected = content.pop();
			content = content;
		}
	}

	function handleScroll(event) {
		console.log(event.wheelDelta);
		if (event.wheelDelta > 100) {
			changeSelection('down');
		} else if (event.wheelDelta <= -100) {
			changeSelection('up');
			console.log('uppetey');
		} else {
			console.log('not scrolling enough');
		}
	}
</script>

<svelte:window on:mousewheel={handleScroll} />

<div>
	{#each content as entry (entry.id)}
		<h2>{entry.name}</h2>
	{/each}

	<h2 class="selected">{selected.name}</h2>
</div>

<style>
	div {
		background-color: aqua;
		overflow: scroll;
		width: 20%;
	}
	.selected {
		color: #ff0000;
	}
</style>
