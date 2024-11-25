<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	type Ripple = { x: number; y: number; id: string }

	export let customClass = ''
	export let type: 'button' | 'submit' = 'button'
	export let disabled = false
	export let size: 'small' | 'medium' = 'medium'
	export let variant: 'primary' | 'secondary' = 'primary'

	const RIPPLE_ANIMATION_DURATION = 800

	const dispatch = createEventDispatcher()

	let ripples: Ripple[] = []

	const rippleEffect = (event: MouseEvent) => {
		const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect()
		const x = event.clientX - rect.left
		const y = event.clientY - rect.top
		const id = Math.random().toString()

		ripples = [...ripples, { x, y, id }]

		setTimeout(() => {
			ripples = ripples.filter((ripple) => ripple.id !== id)
		}, RIPPLE_ANIMATION_DURATION)
	}
</script>

<button
	class="button {customClass} {size} {variant}"
	class:disabled
	{type}
	{disabled}
	on:click={() => {
		dispatch('click')
	}}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="button-inner" on:mousedown={rippleEffect}>
		<div class="button-content">
			{#if $$slots.icon}
				<slot name="icon" />
			{:else}
				<div class="button-content-inner"><slot /></div>
			{/if}
		</div>

		{#each ripples as ripple (ripple.id)}
			<div class="button-ripple" style:left="{ripple.x}px" style:top="{ripple.y}px" />
		{/each}
	</div>
</button>

<style lang="postcss">
	.button {
		--btn-small-size: 32px;
		--btn-medium-size: 48px;

		--inner-z-index: 1;
		--inner-before-z-index: -3;
		--inner-after-z-index: -2;
		--inner-ripple-z-index: -1;
		--content-z-index: 2;

		--ripple-animation-duration: 0.8s;

		cursor: default;
		border-radius: var(--border-radius-4);
		background-color: inherit;
		overflow: hidden;
		user-select: none;

		.button-inner {
			position: relative;
			z-index: var(--inner-z-index);
			transition-duration: var(--duration-1);
			transition-property: color, background-color;
			transition-timing-function: var(--timing-function-1);
			will-change: color, background-color;
			cursor: pointer;
			border-radius: inherit;
			width: 100%;
			height: 100%;

			&::before {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: var(--inner-before-z-index);
				transition: border-color var(--duration-1) var(--timing-function-1);
				will-change: border-color;
				border-width: var(--button-border-width);
				border-style: solid;
				border-radius: inherit;
				content: '';
			}

			&::after {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				z-index: var(--inner-after-z-index);
				transition: width var(--duration-1) var(--timing-function-1);
				will-change: width;
				width: 0;
				content: '';
			}

			.button-content {
				display: flex;
				justify-content: center;
				align-items: center;
				z-index: var(--content-z-index);
				width: 100%;
				height: 100%;
			}

			.button-ripple {
				position: absolute;
				transform: translate(-50%, -50%);
				opacity: 0;
				z-index: var(--inner-ripple-z-index);
				animation: rippleAnimation var(--ripple-animation-duration);
				will-change: left, top, opacity, width, height;
				border-radius: 50%;
			}
		}

		&.disabled {
			pointer-events: none;

			.button-inner {
				cursor: default;
			}
		}

		&:not(.disabled):hover {
			.button-inner::after {
				width: 100%;
			}
		}
	}

	.button.small {
		--button-border-width: 1px;

		min-width: var(--btn-small-size);
		height: var(--btn-small-size);

		.button-content {
			font: var(--font-14-lh22);
			font-weight: var(--font-weight-500);

			.button-content-inner {
				padding: 0 var(--spacing-8);
			}
		}
	}

	.button.medium {
		--button-border-width: 2px;

		min-width: var(--btn-medium-size);
		height: var(--btn-medium-size);

		.button-content {
			font: var(--font-16-lh24);
			font-weight: var(--font-weight-500);

			.button-content-inner {
				padding: 0 var(--spacing-24);
			}
		}
	}

	.button.primary {
		.button-inner {
			background-color: var(--btn-primary-bg);
			color: var(--btn-primary-text);

			&::before {
				border-color: var(--btn-primary-border);
			}

			&::after {
				background-color: var(--btn-primary-bg-hover);
			}

			.button-ripple {
				background-color: var(--btn-primary-ripple);
			}
		}

		&.disabled {
			.button-inner {
				background-color: var(--btn-primary-bg-disabled);
				color: var(--btn-primary-text-disabled);

				&::before {
					border-color: var(--btn-primary-border-disabled);
				}
			}
		}

		&:not(.disabled):hover {
			.button-inner {
				color: var(--btn-primary-text-hover);
			}
		}
	}

	.button.secondary {
		.button-inner {
			background-color: var(--btn-secondary-bg);
			color: var(--btn-secondary-text);

			&::before {
				border-color: var(--btn-secondary-border);
			}

			&::after {
				background-color: var(--btn-secondary-bg-hover);
			}

			.button-ripple {
				background-color: var(--btn-secondary-ripple);
			}
		}

		&.disabled {
			.button-inner {
				background-color: var(--btn-secondary-bg-disabled);
				color: var(--btn-secondary-text-disabled);

				&::before {
					border-color: var(--btn-secondary-border-disabled);
				}
			}
		}

		&:not(.disabled):hover {
			.button-inner {
				color: var(--btn-secondary-text-hover);
			}
		}
	}

	@keyframes rippleAnimation {
		from {
			opacity: 0.6;
			width: 0;
			height: 0;
		}

		to {
			opacity: 0;
			width: 500px;
			height: 500px;
		}
	}
</style>
