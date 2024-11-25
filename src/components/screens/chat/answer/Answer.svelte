<script lang="ts">
	import { AppIcon } from '$components/index'
	import { Bubble } from '../bubble'

	import { createEventDispatcher } from 'svelte'

	export let react: 'like' | 'dislike' | undefined

	const dispatch = createEventDispatcher()
</script>

<div class="answer">
	<img src="src/assets/img/answer-avatar.svg" alt="bot" />

	<div class="answer-inner">
		<div class="title-wrapper">
			<p class="title">Bot assistant</p>

			<button class="react-btn like" type="button" on:click={() => dispatch('like')}>
				<AppIcon
					name={react === 'like' ? 'likeFilledIcon' : 'likeIcon'}
					size={16}
					color={react === 'like' ? 'var(--chat-bubble-react-2)' : 'var(--chat-bubble-react-1)'}
				/>
			</button>

			<button class="react-btn dislike" type="button" on:click={() => dispatch('dislike')}>
				<AppIcon
					name={react === 'dislike' ? 'likeFilledIcon' : 'likeIcon'}
					size={16}
					color="var(--chat-bubble-react-1)"
				/>
			</button>
		</div>

		<Bubble side="left"><slot /></Bubble>
	</div>
</div>

<style lang="postcss">
	.answer {
		--avatar-size: 32px;
		--reaction-size: 16px;

		display: grid;
		grid-template-columns: var(--avatar-size) min-content;
		column-gap: var(--spacing-8);
		align-items: flex-end;
	}

	.answer-inner {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	.title-wrapper {
		display: grid;
		grid-template-columns: auto var(--reaction-size) var(--reaction-size);
		column-gap: var(--spacing-8);
		width: 100%;
	}

	.title {
		color: var(--chat-bubble-title);
		font: var(--font-12-lh16);
		font-weight: var(--font-weight-400);
	}

	.react-btn {
		display: flex;

		&.dislike {
			transform: rotate(180deg);
		}
	}
</style>
