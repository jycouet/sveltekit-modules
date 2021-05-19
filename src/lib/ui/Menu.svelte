<script lang="ts">
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { MenuMapping } from '../helper/MenuMapping';

	let pagePath;
	const pagePathUnSub = page.subscribe((c) => {
		pagePath = c.path;
	});

	onDestroy(() => {
		pagePathUnSub();
	});
</script>

<div class="menu p">
	<div class="flex space-between">
		<div class="flex">
			{#each Object.entries(MenuMapping) as [key, value] (key)}
				<div class="mx"><a class:active={pagePath === key} href={key}>{value}</a></div>
			{/each}
		</div>
		<div class="flex">
			<div class="mx"><a href="./graphql" target="_blank">GraphiQL</a></div>
		</div>
	</div>
</div>

<style>
	.menu {
		background-color: #ff3e00;
	}

	.p {
		padding: 1rem;
	}

	.flex {
		display: flex;
	}

	.space-between {
		justify-content: space-between;
	}

	.mx {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	a {
		text-decoration: none;
		color: white;
	}
	a:hover {
		text-decoration: underline;
	}

	.active {
		text-decoration: underline;
	}
</style>
