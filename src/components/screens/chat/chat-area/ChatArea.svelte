<script lang="ts">
	import { ChatBubble } from '../chat-bubble'
</script>

<div class="chat-area-wrapper">
	<ChatBubble side="left">
		<p slot="text">
			some text left some text left some text left some text left some text left some text left some
			text left some text left
		</p>
	</ChatBubble>

	<ChatBubble side="right">
		<p slot="text">
			some text right some text right some text right some text right some text right some text
			right some text right
		</p>
	</ChatBubble>
</div>

<style lang="postcss">
	.chat-area-wrapper {
		--chat-area-height: 486px;

		padding: var(--spacing-16);
		width: 100%;
		height: var(--chat-area-height);
		overflow-y: scroll;
	}
</style>
