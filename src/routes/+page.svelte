<script>
	import Circle from './circle.svelte';
	import SelectionWheel from './selectionWheel.svelte';
	import '../styles.css';
</script>

<Circle />

<div>
	<SelectionWheel />
</div>

<h2>Turning the Gears Tech Demo</h2>

<style>
	div {
		width: 100%;
		height: 700px;
		display: flex;
		align-items: center;
		z-index: 1;
	}

	h2 {
		position: absolute;
		right: 2%;
		bottom: 2%;
	}
</style>
