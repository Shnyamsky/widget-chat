<script lang="ts">
	import { Button } from '$shared/components'
	import { routingStore } from '$store/index'
</script>

<div class="final">
	<h1 class="final-header">Thank you!</h1>
	<!-- TODO: change breaks and add font weights -->
	<p class="final-text">
		Your request has been submitted.<br /> Our team will respond by email as soon as<br /> possible.
	</p>
	<Button variant="secondary" on:click={() => routingStore.onRedirect('chat')}>Close window</Button>
</div>

<style lang="postcss">
	.final {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-16);

		margin: var(--spacing-8) 0 var(--spacing-16) 0;
		width: 100%;
	}

	.final-header {
		color: var(--final-screen-title-text);
		font: var(--font-24-lh32);
		font-weight: var(--font-weight-500);
	}

	.final-text {
		color: var(--final-screen-description-text);
		font: var(--font-18-lh28);
		font-weight: var(--font-weight-300);
		text-align: center;
	}
</style>
