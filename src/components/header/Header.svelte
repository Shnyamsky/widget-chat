<script lang="ts">
	import { AppIcon } from '$components/index'
</script>

<div class="header">
	<AppIcon name="chatIcon" color="#fff" />
	<h3 class="header-title">Have a question?</h3>

	<button class="header-button">
		<AppIcon name="closeIcon" color="#fff" />
	</button>
</div>

<style lang="postcss">
	.header {
		--button-size: 24px;

		display: grid;
		grid-template-columns: 24px auto var(--button-size);
		column-gap: var(--spacing-16);
		align-items: center;
		background-color: var(--header-bg);
		padding: 12px var(--spacing-16);
		width: 100%;
		height: var(--header-height);
	}

	.header-title {
		color: var(--header-text);
		font: var(--font-16-lh24);
		font-weight: var(--font-weight-500);
	}

	.header-button {
		background-color: transparent;
		width: var(--button-size);
		height: var(--button-size);
	}
</style>
