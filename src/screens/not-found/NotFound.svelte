<script lang="ts">
	import { Container } from '$components/index'
	import { Button } from '$shared/components'
	import { routingStore } from '$store/index'
</script>

<Container>
	<div class="not-found">
		<h1 class="not-found-header">Screen not found</h1>
		<Button variant="secondary" on:click={() => routingStore.onRedirect('chat')}>Go to chat</Button>
	</div>
</Container>

<style lang="postcss">
	.not-found {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-16);
		width: 100%;
	}

	.not-found-header {
		color: var(--main-text);
		font: var(--font-24-lh32);
		font-weight: var(--font-weight-500);
	}
</style>
