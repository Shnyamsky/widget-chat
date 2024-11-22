<script lang="ts">
	import { Button, Input } from '$shared/components'
	import { routingStore, questionStore } from '$store/index'

	const form = questionStore.$form

	const onSubmit = (event: Event) => {
		routingStore.onRedirect('confirm')
	}
</script>

<form class="question-form" on:submit|preventDefault={onSubmit}>
	<Input
		name="email"
		value={$form.email}
		on:change={questionStore.onFormChange('email')}
		label="Email"
	/>
	<Input
		name="question"
		value={$form.question}
		on:change={questionStore.onFormChange('question')}
		label="Your question"
		textarea
		maxRows={4}
	/>
	<Button type="submit">Send question</Button>
</form>

<style lang="postcss">
	.question-form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-16);
		width: 100%;
	}
</style>
