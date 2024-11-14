<script lang="ts">
	import { Composer, Footer } from '$blocks/index'
</script>

<div class="chat">
	<div class="composer">
		<Composer />
	</div>

	<div class="footer">
		<Footer />
	</div>
</div>

<style lang="postcss">
	.chat {
		display: grid;
		grid-template-areas:
			'chat'
			'composer'
			'footer';
		width: 100%;

		.composer {
			grid-area: composer;
		}

		.footer {
			grid-area: footer;
		}
	}
</style>
