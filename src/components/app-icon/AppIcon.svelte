<script lang="ts">
	import { icons } from '$assets/index'

	type AppIcon = keyof typeof icons

	export let name: AppIcon
	export let customClass = ''
	export let size = 24
	export let color = ''

	let content = ''
	$: content = icons[name]

	// TODO: add lazy loading prop
	// const loadIcon = async (name: string) => {
	// 	const module = await import(`../assets/${name}.svg?raw`)

	// 	content = module.default
	// }

	// $: loadIcon(name)
</script>

{#if content}
	<div
		class="icon {customClass}"
		class:colored={color}
		style:--icon-size="{size}px"
		style:--icon-color={color}
	>
		{@html content}
	</div>
{/if}

<style lang="postcss">
	.icon {
		display: inline-flex;

		:global(svg) {
			width: var(--icon-size);
			height: var(--icon-size);
		}
	}

	.colored {
		:global(svg path) {
			fill: var(--icon-color);
		}
	}
</style>
