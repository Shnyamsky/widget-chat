<script lang="ts">
	import { Button, Input } from '$shared/components/index'
	import { routingStore, questionStore } from '$store/index'

	const form = questionStore.$form

	const onSubmit = (event: Event) => {
		routingStore.onRedirect('confirm')
	}
</script>

<form class="form" on:submit|preventDefault={onSubmit}>
	<Input
		label="Email"
		name="email"
		value={$form.email}
		on:change={questionStore.onFormChange('email')}
	/>
	<Input
		textarea
		label="Your question"
		maxRows={4}
		name="question"
		value={$form.question}
		on:change={questionStore.onFormChange('question')}
	/>
	<Button type="submit">Send question</Button>
</form>

<style lang="postcss">
	.form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-16);
		width: 100%;
	}
</style>
