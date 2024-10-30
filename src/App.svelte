<script lang="ts">
	import { Container, Header, Layout, QuestionScreen } from '$application/index'
</script>

<main>
	<Layout>
		<Header slot="header" />
		<Container slot="container">
			<QuestionScreen />
		</Container>
	</Layout>
</main>
