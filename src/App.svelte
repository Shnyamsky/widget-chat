<script lang="ts">
	import { Container, Header, Layout } from '$components/index'
	import { routingStore } from '$store/index'

	let currentScreen = routingStore.$currentScreen
	let screens = routingStore.$screens
</script>

<main>
	<Layout>
		<Header slot="header" />
		<Container slot="container">
			<svelte:component this={$screens[$currentScreen]} />
		</Container>
	</Layout>
</main>
