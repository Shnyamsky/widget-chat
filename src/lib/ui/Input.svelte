<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let id = 'input-id'
	export let type = 'text'
	export let name = 'input-name'
	export let label = ''
	export let placeholder = '' // TODO: add placeholder
	export let error = ''
	export let value = ''

	const dispatch = createEventDispatcher()

	const onInput = (event: Event) => {
		const _value = (event.target as HTMLInputElement).value

		dispatch('change', _value)
		;(event.target as HTMLInputElement).value = value
	}
</script>

<div class="input" class:error>
	{#if label}
		<label for={id} class="label">{label}</label>
	{/if}

	<input class="inputInner" {id} {type} {name} {placeholder} {value} on:input={onInput} />

	{#if error}
		<span class="error">{error}</span>
	{/if}
</div>

<style lang="postcss">
	.input {
		--input-height: 48px;
		--input-width: 100px;
		position: relative;
		width: 100%;

		min-width: var(--input-width);
		height: var(--input-height);
	}

	.label {
		position: absolute;
		top: 0;
		left: 0;
	}

	.inputInner {
		background-color: red;
		width: 100%;
		height: 100%;
	}

	.error {
	}
</style>
