<script lang="ts">
	import Card from './Card.svelte';
	export let list: { name: string }[];
</script>

<div class="items">
	{#each list as item}
		<Card {...item} />
	{/each}
</div>

<style>
	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
