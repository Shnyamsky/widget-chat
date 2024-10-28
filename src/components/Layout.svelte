<script lang="ts"></script>

<div class="layout">
	<slot name="header" />
	<slot name="container" />
</div>

<style lang="postcss">
	.layout {
		box-shadow:
			0px 12px 16px -4px rgba(16, 24, 40, 0.08),
			0px 4px 6px -2px rgba(16, 24, 40, 0.03);
		border-radius: var(--border-radius-4);
		background-color: var(--main-background-color);
		width: var(--widget-width);
		max-height: var(--widget-height);
		overflow: hidden;
	}
</style>
