<script lang="ts">
	import Button from '$lib/ui/Button.svelte'
	import Input from '$lib/ui/Input.svelte'

	let value = ''

	const onSubmit = (event: Event) => {
		const formData = new FormData(event.target as HTMLFormElement)

		const inputName = formData.get('input')
	}
</script>

<form class="form" on:submit|preventDefault={onSubmit}>
	<Input />
	<Button type="submit" variant="secondary">Button template</Button>
</form>

<style lang="postcss">
	.form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-16);
		width: 100%;
	}
</style>
