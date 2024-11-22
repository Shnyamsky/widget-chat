<script lang="ts">
	export let side: 'left' | 'right'
</script>

<div class="chat-bubble {side}">
	<slot name="text" />
</div>

<style lang="postcss">
	.chat-bubble {
		--bubble-border-radius: 8px;
		--bubble-border-small-radius: 2px;
		--bubble-width: 280px;

		border-radius: var(--bubble-border-radius);
		background-color: var(--chat-bubble-bg);
		padding: var(--spacing-8) var(--spacing-16);
		width: var(--bubble-width);
		font: var(--font-16-lh24);
		font-weight: var(--font-weight-300);
	}

	.right {
		border-bottom-right-radius: var(--bubble-border-small-radius);
	}

	.left {
		border-bottom-left-radius: var(--bubble-border-small-radius);
	}
</style>
