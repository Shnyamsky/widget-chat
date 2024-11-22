<script lang="ts">
	import * as icons from '$assets/index'

	type AppIcon = keyof typeof icons

	export let name: AppIcon

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
	{@html content}
{/if}
