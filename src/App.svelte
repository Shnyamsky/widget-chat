<script lang="ts">
	import { Container, Header, Layout } from '$components/index'

	import { QuestionScreen } from '$screens/index'
</script>

<main>
	<Layout>
		<Header slot="header" />
		<Container slot="container">
			<QuestionScreen />
		</Container>
	</Layout>
</main>
