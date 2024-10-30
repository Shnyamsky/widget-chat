<script lang="ts">
	import { Container, Header, Layout } from '$application/index'

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
