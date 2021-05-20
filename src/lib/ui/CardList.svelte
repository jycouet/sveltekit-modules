<script lang="ts">
	import Card from './Card.svelte';

	export let list: { name: string }[];
	export let isBlue = false;
</script>

<div class="items">
	{#each list as item}
		<Card {...item} {isBlue} />
	{/each}
</div>

<style>
	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
