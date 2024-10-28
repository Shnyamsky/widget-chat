<script lang="ts">
	import Layout from '$components/Layout.svelte'
	import Header from '$components/Header.svelte'
	import Container from '$components/Container.svelte'
</script>

<main>
	<Layout>
		<Header slot="header" />
		<Container slot="container">Container</Container>
	</Layout>
</main>
