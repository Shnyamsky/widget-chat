<script lang="ts">
	import { Header, Layout } from '$components/index'
	import * as screens from '$screens/index'
	import { routingStore } from '$store/index'

	import type { ComponentType } from 'svelte'
	import type { StoreValue } from 'nanostores'

	type Screen = StoreValue<typeof routingStore.$screen>

	let screen = routingStore.$screen

	const screensRoutes: Record<Screen, ComponentType> = {
		chat: screens.ChatScreen,
		confirm: screens.ConfirmScreen,
		question: screens.QuestionScreen
	}

	$: currentScreen = screensRoutes[$screen] || screens.NotFound
</script>

<main>
	<Layout>
		<Header slot="header" />
		<svelte:component this={currentScreen} slot="content" />
	</Layout>
</main>
