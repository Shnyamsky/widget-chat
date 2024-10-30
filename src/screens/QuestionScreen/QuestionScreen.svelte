<script lang="ts">
	import { Button, Input } from '$lib/ui'

	let email = ''
	let question = ''

	const onSubmit = (event: Event) => {
		const formData = new FormData(event.target as HTMLFormElement)

		const emailValue = formData.get('email')
		const questionValue = formData.get('question')

		console.log(emailValue, questionValue)
	}
</script>

<form class="form" on:submit|preventDefault={onSubmit}>
	<Input label="Email" name="email" value={email} on:change={({ detail }) => (email = detail)} />
	<Input
		textarea
		label="Your question"
		maxRows={4}
		name="question"
		value={question}
		on:change={({ detail }) => (question = detail)}
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
