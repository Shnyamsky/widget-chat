<script lang="ts">
	import ChatIcon from '$lib/icons/ChatIcon.svelte'
	import CloseIcon from '$lib/icons/CloseIcon.svelte'
</script>

<div class="header">
	<ChatIcon />
	<h3 class="header-title">Have a question?</h3>

	<button class="header-button">
		<CloseIcon />
	</button>
</div>

<style lang="postcss">
	.header {
		display: grid;
		grid-template-columns: 24px auto 24px;
		column-gap: var(--spacing-16);
		align-items: center;
		background-color: var(--header-bg);
		padding: 12px var(--spacing-16);
		width: 100%;
	}

	.header-title {
		color: var(--header-text);
		font: var(--font-16-lh24);
		font-weight: var(--font-weight-500);
	}

	.header-button {
		cursor: pointer;
		background-color: inherit;
		width: 24px;
		height: 24px;
	}
</style>
