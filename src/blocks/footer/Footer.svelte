<script lang="ts">
	import { AppIcon } from '$blocks/app-icon'
</script>

<footer class="footer-wrapper">
	<p class="text">Powered by</p>

	<AppIcon name="logoIcon" />
</footer>

<style lang="postcss">
	.footer-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--spacing-4);
		width: 100%;
	}

	.text {
		color: var(--footer-text);
		font: var(--font-12-lh16);
		font-weight: var(--font-weight-300);
	}
</style>
