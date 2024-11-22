<script lang="ts">
	import { Button } from '$shared/components'
	import { routingStore } from '$store/index'
</script>

<div class="not-found">
	<h1 class="not-found-header">Screen not found</h1>
	<Button variant="secondary" on:click={() => routingStore.onRedirect('question')}
		>Go to chat</Button
	>
</div>

<style lang="postcss">
	.not-found {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-16);

		margin: var(--spacing-8) 0 var(--spacing-16) 0;
		width: 100%;
	}

	.not-found-header {
		color: var(--main-text);
		font: var(--font-24-lh32);
		font-weight: var(--font-weight-500);
	}
</style>
