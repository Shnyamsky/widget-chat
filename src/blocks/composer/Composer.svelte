<script lang="ts">
	import { Input, Button } from '$shared/components/index'

	import { AppIcon } from '$blocks/index'

	import { routingStore, dialogStore } from '$store/index'

	const form = dialogStore.$form

	const onSubmit = (event: Event) => {
		routingStore.onRedirect('question')
	}
</script>

<form class="composer-form" on:submit|preventDefault={onSubmit}>
	<Input
		name="question"
		value={$form.question}
		on:change={dialogStore.onFormChange('question')}
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
