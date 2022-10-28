<script>
	import anime from 'animejs';
	import { onMount } from 'svelte';

	onMount(() => {
		let selectorAnimation = anime({
			targets: '.selected'
		});
	});

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
	{#each content as entry, i}
		<h2 style:margin-left="{i * 30}px" style:font-size="{i * 5}px">
			{entry.name}
		</h2>
	{/each}

	<h2
		class="selected"
		style:margin-left="{content.length * 30}px"
		style:font-size="{content.length * 5}px"
	>
		{selected.name}
	</h2>
</div>

<style>
	div {
		background-color: aqua;
		overflow: scroll;
		width: 100%;
	}

	.selected {
		color: #ff0000;
	}
</style>
