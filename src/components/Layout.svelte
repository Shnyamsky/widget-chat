<script lang="ts"></script>

<div class="layout">
	<slot />
</div>

<style lang="postcss">
	.layout {
		box-shadow:
			0px 12px 16px -4px rgba(16, 24, 40, 0.08),
			0px 4px 6px -2px rgba(16, 24, 40, 0.03);
		border-radius: var(--border-radius-2);
		background-color: var(--background-main-color);
		width: var(--widget-width);
		height: var(--widget-height);
		overflow: hidden;

		color: var(--text-main-color);

		font: var(--font-16-lh24);
		font-weight: var(--font-weight-300);
	}
</style>
