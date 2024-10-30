<script lang="ts">
	import * as icons from '$assets/index'

	type Icon = keyof typeof icons

	export let name: Icon

	let content = ''
	$: content = icons[name]

	// const loadIcon = async (name: string) => {
	// 	const module = await import(`../assets/${name}.svg?raw`)

	// 	content = module.default
	// }

	// $: loadIcon(name)
</script>

{#if content}
	{@html content}
{/if}
