<script lang="ts">
	import Layout from '$components/Layout.svelte'
	import Header from '$components/Header.svelte'
	import Container from '$components/Container.svelte'

	import Button from '$lib/ui/Button.svelte'
	import Input from '$lib/ui/Input.svelte'

	let value = ''

	const onSubmit = (event: Event) => {
		const formData = new FormData(event.target as HTMLFormElement)

		const inputName = formData.get('input')
	}
</script>

<main>
	<Layout>
		<Header slot="header" />
		<Container slot="container">
			<form class="form" on:submit|preventDefault={onSubmit}>
				<Input
					name="input"
					label="Your question"
					error=""
					{value}
					on:change={({ detail }) => {
						value = detail
					}}
				/>
				<Button type="submit" variant="secondary"><p class="btn">Button template</p></Button>
			</form>
		</Container>
	</Layout>
</main>

<style lang="postcss">
	.form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-16);
		width: 100%;
	}

	.btn {
		width: 150px;
	}
</style>
