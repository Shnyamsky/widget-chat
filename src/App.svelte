<script lang="ts">
	import Layout from '$components/Layout.svelte'
	import Header from '$components/Header.svelte'
	import Container from '$components/Container.svelte'

	import QuestionForm from '$components/QuestionForm.svelte'
</script>

<main>
	<Layout>
		<Header slot="header" />
		<Container slot="container">
			<QuestionForm />
		</Container>
	</Layout>
</main>
