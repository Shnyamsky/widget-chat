<script lang="ts">
	let a = 0
</script>

<div class="header">
	<h3 class="header-title">Wavix chat bot</h3>
	<button class="header-button">Close</button>
</div>

<style lang="postcss">
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--background-secondary-color);
		padding: var(--spacing-16) var(--spacing-8);
		width: 100%;
	}

	.header-title {
		color: var(--text-secondary-color);
		font: var(--font-16-lh24);
		font-weight: var(--font-weight-500);
	}

	.header-button {
		transition:
			background-color 0.3s ease-in-out,
			color 0.3s ease-in-out;
		cursor: pointer;
		border: 1px solid var(--border-secondary-color);
		border-radius: var(--border-radius-4);
		background-color: var(--primary-green);
		padding: var(--spacing-4);
		color: var(--text-secondary-color);
		font: var(--font-16-lh24);
		font-weight: var(--font-weight-500);

		&:hover {
			background-color: var(--clear);
			color: var(--primary-green);
		}
	}
</style>
