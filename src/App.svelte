<script lang="ts">
	import Layout from '$components/Layout.svelte'
	import Header from '$components/Header.svelte'
	import Container from '$components/Container.svelte'

	import Button from '$lib/ui/Button.svelte'

	let btn1 = false
	let btn2 = false
</script>

<main>
	<Layout>
		<Header slot="header" />
		<Container slot="container">
			<Button disabled={btn1} on:click={() => (btn2 = !btn2)}>Button 1</Button>
			<Button disabled={btn2} variant="secondary" on:click={() => (btn1 = !btn1)}>Button 2</Button>
		</Container>
	</Layout>
</main>
