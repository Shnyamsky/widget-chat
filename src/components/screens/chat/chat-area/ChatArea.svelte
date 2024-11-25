<script lang="ts">
	import { Answer } from '../answer'
	import { Question } from '../question'

	//TODO: refactor
	let react: 'like' | 'dislike' | undefined = 'like'

	let onLike = () => {
		react = react !== 'like' ? 'like' : undefined
	}

	let onDislike = () => {
		console.log(react)
		react = react !== 'dislike' ? 'dislike' : undefined
	}
</script>

<div class="chat-area-wrapper">
	<Question />

	<Answer {react} on:like={onLike} on:dislike={onDislike}>
		<p>
			Some answer text some answer text some answer text some answer text some answer text some
			answer text
		</p>
	</Answer>
</div>

<style lang="postcss">
	.chat-area-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-16);
		padding: var(--spacing-16);
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}
</style>
