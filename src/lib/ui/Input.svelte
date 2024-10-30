<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let customClass = ''
	export let type = 'text'
	export let name = 'inputName'
	export let value = ''
	export let label = ''
	export let error = ''
	export let variant: 'primary' | 'secondary' = 'primary'

	const dispatch = createEventDispatcher()

	const onInput = (event: Event) => {
		const _value = (event.target as HTMLInputElement).value

		dispatch('change', _value)
		;(event.target as HTMLInputElement).value = value
	}
</script>

<div class="input-wrapper {customClass} {variant}" class:error>
	<div class="input-inner" class:with-value={value}>
		{#if label}
			<label for={name} class="label">{label}</label>
		{/if}

		<input class="input" id={name} {type} {name} {value} on:input={onInput} />

		<div class="underline" />
	</div>

	<div class="error-message">{error}</div>
</div>

<style lang="postcss">
	.input-wrapper {
		--input-wrapper-min-width: 100px;

		--input-inner-height: 48px;

		--input-height: 28px;
		--underline-height: 2px;
		--error-height: 16px;

		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
		width: 100%;
		min-width: var(--input-wrapper-min-width);
	}

	.input-inner {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: var(--input-inner-height);

		&:has(.input:focus) .underline::after {
			right: 0;
			width: 100%;
		}

		&.with-value .label,
		&:has(.input:focus) .label {
			transform: translateY(calc(var(--underline-height) * -2 - var(--input-height)));
			font: var(--font-10-lh16);
		}

		.label {
			position: absolute;
			bottom: var(--underline-height);
			left: 0;
			/* TODO: refactor line height animation */
			transition-duration: var(--duration-2);
			transition-property: font, color, transform;
			transition-timing-function: var(--timing-function-2);
			will-change: font, color, transform;
			width: 100%;
			overflow: hidden;
			font: var(--font-18-lh28);
			font-weight: var(--font-weight-400);
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.input {
			background-color: transparent;
			width: 100%;
			height: var(--input-height);
			font: var(--font-18-lh28);
			font-weight: var(--font-weight-400);

			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
		}

		.underline {
			position: relative;
			width: 100%;
			height: var(--underline-height);

			&::before {
				position: absolute;
				right: 0;
				bottom: 0;
				transition: background-color var(--duration-2) var(--timing-function-2);
				will-change: background-color;
				width: 100%;
				height: calc(var(--underline-height) / 2);
				content: '';
			}

			&::after {
				position: absolute;
				/* TODO: refactor right transition */
				right: 50%;
				bottom: 0;
				transition-duration: var(--duration-2);
				transition-property: width, right;
				transition-timing-function: var(--timing-function-2);
				will-change: width, right;
				width: 0;
				height: var(--underline-height);
				content: '';
			}
		}
	}

	.error-message {
		width: 100%;
		height: var(--error-height);
		overflow: hidden;
		font: var(--font-12-lh16);
		font-weight: var(--font-weight-300);
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.input-wrapper.primary:not(.error) {
		.input-inner {
			background-color: var(--input-primary-bg);

			.label {
				color: var(--input-primary-label-text);
			}

			.input {
				color: var(--input-primary-text);
				caret-color: var(--input-primary-caret);
			}

			.underline {
				&::before {
					background-color: var(--input-primary-underline);
				}

				&::after {
					background-color: var(--input-primary-underline-focus);
				}
			}
		}

		.input-inner:has(.input:focus) {
			.label {
				color: var(--input-primary-label-text-focus);
			}
		}

		.input-inner:hover {
			.label {
				color: var(--input-primary-label-text-hover);
			}

			.underline {
				&::before {
					background-color: var(--input-primary-underline-hover);
				}
			}
		}
	}

	/* TODO: add secondary variant */
	/* .input-wrapper.secondary:not(.error) {} */

	.input-wrapper.error {
		.input-inner {
			.label {
				color: var(--input-primary-label-text-error);
			}

			.input {
				color: var(--input-primary-text-error);
				caret-color: var(--input-primary-caret-error);
			}

			.underline {
				&::before {
					background-color: var(--input-primary-underline-error);
				}

				&::after {
					background-color: var(--input-primary-underline-error);
				}
			}
		}

		.input-inner:has(.input:focus) {
			.label {
				color: var(--input-primary-label-text-error);
			}
		}

		.error-message {
			color: var(--input-primary-error-text-error);
		}
	}
</style>
