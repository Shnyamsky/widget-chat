<script lang="ts">
	import { Footer } from '$components/index'

	import { ChatArea, Composer } from '$components/screens/chat'
</script>

<div class="chat">
	<div class="chat-area">
		<ChatArea />
	</div>

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
		grid-template-rows: minmax(0, 1fr) auto auto;
		grid-template-areas:
			'chat-area'
			'composer'
			'footer';
		width: 100%;
		height: calc(var(--widget-max-height) - var(--header-height));

		.chat-area {
			grid-area: chat-area;
		}

		.composer {
			position: relative;
			grid-area: composer;
			padding: var(--spacing-16) var(--spacing-16) 0;

			&::before {
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				background-color: var(--chat-border-color);
				height: 1px;
				content: '';
			}
		}

		.footer {
			grid-area: footer;
			padding-bottom: var(--spacing-16);
		}
	}
</style>
