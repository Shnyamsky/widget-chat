<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	const RIPPLE_ANIMATION_DURATION = 800

	export let type: 'button' | 'submit' = 'button'
	export let variant: 'primary' | 'secondary' = 'primary'
	export let disabled = false

	const dispatch = createEventDispatcher()

	const rippleEffect = (event: MouseEvent) => {
		const btnInner = event.currentTarget as HTMLElement

		if (!btnInner) return

		const ripple = document.createElement('div')
		ripple.classList.add('button-ripple')
		btnInner.appendChild(ripple)

		const rect = btnInner.getBoundingClientRect()
		const x = event.clientX - rect.left
		const y = event.clientY - rect.top

		ripple.style.left = `${x}px`
		ripple.style.top = `${y}px`

		setTimeout(() => {
			ripple.remove()
		}, RIPPLE_ANIMATION_DURATION)
	}

	const onClick = (event: MouseEvent) => {
		dispatch('click')
	}
</script>

<button class={`button ${variant}`} {type} {disabled} on:click={onClick}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="button-inner" on:mousedown={rippleEffect}>
		<div class="button-content"><slot /></div>
	</div>
</button>

<style lang="postcss">
	.button {
		--extra-spacing-12: 12px;

		--button-height: 48px;
		--button-border-width: 2px;

		--inner-z-index: 1;
		--inner-before-z-index: -3;
		--inner-after-z-index: -2;
		--inner-ripple-z-index: -1;
		--content-z-index: 2;

		--ripple-animation-duration: 0.8s;

		border-radius: var(--border-radius-4);
		background-color: inherit;
		height: var(--button-height);
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
			padding: var(--extra-spacing-12) var(--spacing-24);

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
				z-index: var(--content-z-index);
				font: var(--font-16-lh24);
				font-weight: var(--font-weight-500);
			}

			:global(.button-ripple) {
				position: absolute;
				transform: translate(-50%, -50%);
				opacity: 0;
				z-index: var(--inner-ripple-z-index);
				animation: rippleAnimation var(--ripple-animation-duration);
				will-change: left, top, opacity, width, height;
				border-radius: 50%;
			}
		}

		&:disabled {
			pointer-events: none;

			.button-inner {
				cursor: default;
			}
		}

		&:not(:disabled):hover {
			.button-inner::after {
				width: 100%;
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

			:global(.button-ripple) {
				background-color: var(--btn-primary-ripple);
			}
		}

		&:disabled {
			.button-inner {
				background-color: var(--btn-primary-bg-disabled);
				color: var(--btn-primary-text-disabled);

				&::before {
					border-color: var(--btn-primary-border-disabled);
				}
			}
		}

		&:not(:disabled):hover {
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

			:global(.button-ripple) {
				background-color: var(--btn-secondary-ripple);
			}
		}

		&:disabled {
			.button-inner {
				background-color: var(--btn-secondary-bg-disabled);
				color: var(--btn-secondary-text-disabled);

				&::before {
					border-color: var(--btn-secondary-border-disabled);
				}
			}
		}

		&:not(:disabled):hover {
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
