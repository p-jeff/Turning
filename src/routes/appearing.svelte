<script>
	export let tag;
	export let i;
	import { afterUpdate } from 'svelte';
	import { createAnimationTriggerAction } from 'svelte-trigger-action';

	const { triggerAnimation, animationAction } = createAnimationTriggerAction();

	afterUpdate(() => {
		triggerAnimation('appearing');
	});
</script>

<h2 use:animationAction style:animation-delay="{i}s">{tag}</h2>

<style>
	h2 {
		text-align: center;
	}

	:global(.appearing) {
		animation: appearing 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}

	@keyframes appearing {
		0% {
			opacity: 0%;
		}
		100% {
			opacity: 100%;
		}
	}
</style>
