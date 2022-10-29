<script>
	import { afterUpdate } from 'svelte';
	import { createAnimationTriggerAction } from 'svelte-trigger-action';

	export let i;
	export let name;
	export let animDirection;
	let up;

	const { triggerAnimation, animationAction } = createAnimationTriggerAction();

	afterUpdate(() => {
		if (animDirection === 'up') {
			triggerAnimation('shakeUp');
			up = true;
		} else if (animDirection === 'down') {
			triggerAnimation('shakeDown');
			up = false;
		}
	});
</script>

<h2
	use:animationAction
	style:margin-left="{i * 30}px"
	style:font-size="{i * 5}px"
	style:animation-delay="{up ? -i * 50 : i * 50}ms"
>
	{name}
</h2>

<style>
	:global(.shakeUp) {
		animation: shakeUp 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}
	:global(.shakeDown) {
		animation: shakeDown 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}

	@keyframes shakeDown {
		10% {
			transform: translate(0px, 4px);
		}
		90% {
			transform: translate(0px, 6px);
		}
	}

	@keyframes shakeUp {
		10% {
			transform: translate(0px, -4px);
		}
		90% {
			transform: translate(0px, -6px);
		}
	}
</style>
