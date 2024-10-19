<script lang="ts">
	import faviconLogo from '/favicon.png'
</script>

<main>
	<div>
		<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
			<img src={faviconLogo} class="logo" alt="Vite Logo" />
		</a>
	</div>
	<h1>Vite + Svelte</h1>

	<div class="card">Counter</div>

	<p>
		Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer"
			>SvelteKit</a
		>, the official Svelte app framework powered by Vite!
	</p>

	<p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
	.logo {
		transition: filter 300ms;
		will-change: filter;
		padding: 1.5em;
		height: 6em;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.read-the-docs {
		color: #888;
	}
</style>
