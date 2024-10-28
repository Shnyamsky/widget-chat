<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let type: 'button' | 'submit' = 'button'
	export let variant: 'primary' | 'secondary' = 'primary'
	export let disabled = false

	const dispatch = createEventDispatcher()
</script>

<button
	class={`button ${variant}`}
	{type}
	{disabled}
	on:click={() => {
		dispatch('click')
	}}
>
	<div class="button-inner">
		<div class="button-ripple" />
		<div class="button-content"><slot /></div>
	</div>
</button>

<style lang="postcss">
	.button {
		--inner-z-index: 1;
		--content-z-index: 2;

		--button-height: 48px;
		--button-border-width: 2px;

		border-radius: var(--border-radius-4);
		height: var(--button-height);
		overflow: hidden;
		user-select: none;

		.button-inner {
			position: relative;
			z-index: var(--inner-z-index);
			transition: color 0.6s var(--animation-function-1);
			cursor: pointer;
			border-radius: inherit;
			padding: 12px var(--spacing-24);

			&::before {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: -2;
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
				z-index: -1;
				transition: width 0.6s var(--animation-function-1);
				width: 0;
				content: '';
			}
		}

		.button-content {
			z-index: var(--content-z-index);
			font: var(--font-16-lh24);
			font-weight: var(--font-weight-500);
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
			background-color: var(--button-primary-background-color);
			color: var(--button-primary-text-color);

			&::before {
				border-color: var(--button-primary-border-color);
			}

			&::after {
				background-color: var(--button-primary-background-hover-color);
			}
		}

		&:disabled {
			.button-inner {
				background-color: var(--button-primary-background-disabled-color);

				&::before {
					border-color: var(--button-primary-border-disabled-color);
				}
			}
		}
	}

	.button.secondary {
		.button-inner {
			background-color: var(--button-secondary-background-color);
			color: var(--button-secondary-text-color);

			&::before {
				border-color: var(--button-secondary-border-color);
			}

			&::after {
				background-color: var(--button-secondary-background-hover-color);
			}
		}

		&:disabled {
			.button-inner {
				color: var(--button-secondary-text-disabled-color);

				&::before {
					border-color: var(--button-secondary-border-disabled-color);
				}
			}
		}

		&:not(:disabled):hover {
			.button-inner {
				color: var(--button-secondary-text-hover-color);
			}
		}
	}
</style>
