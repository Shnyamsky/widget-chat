<script lang="ts">
	import { Input, Button } from '$shared/components'

	import { AppIcon } from '$components/index'

	import { routingStore, chatStore } from '$store/index'

	const form = chatStore.$form

	const onSubmit = (event: Event) => {
		routingStore.onRedirect('question')
	}
</script>

<form class="composer-form" on:submit|preventDefault={onSubmit}>
	<Input
		name="question"
		value={$form.input}
		on:change={chatStore.onFormChange('input')}
		label="Your question"
		textarea
		maxRows={4}
	/>
	<Button type="submit"><AppIcon slot="icon" name="paperPlaneIcon" /></Button>
</form>

<style lang="postcss">
	.composer-form {
		display: flex;
		gap: var(--spacing-16);
	}
</style>
