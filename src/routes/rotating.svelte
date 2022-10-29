<script>
	import anime from 'animejs';
	import { afterUpdate } from 'svelte';

	export let tag;

	afterUpdate(() => {
		const path = anime.path('.arch');

		let appearAnimation = anime({
			targets: '.entry',
			duration: '1500ms',
			translateX: path('x'),
			translateY: path('y'),
			easing: 'linear',
			delay: anime.stagger(1000)
		});

		console.log('UPDATED');
	});
</script>

<h2 class="entry">{tag}</h2>

<svg><path class="arch" d="m 0 0 q 120 0 120 100" /></svg>

<style>
	.entry {
		margin-top: -115px;
		margin-left: -250px;
		text-align: center;
	}

	svg {
		stroke: none;
		fill: none;
		position: absolute;
		left: -9999px;
	}
</style>
