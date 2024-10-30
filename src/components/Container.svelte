<div class="container">
	<slot />
</div>

<style lang="postcss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--main-bg);
		padding: var(--spacing-16);
		width: 100%;
		height: 100%;
		color: var(--main-text);
	}
</style>
