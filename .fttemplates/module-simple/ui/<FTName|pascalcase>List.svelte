<script lang="ts">
	import type { <FTName|pascalcase>Fragment } from '$lib/graphql/_gen/graphqlClient';
	import CardList from '$lib/ui/CardList.svelte';
	import <FTName|pascalcase>Card from './<FTName|pascalcase>Card.svelte';

	export let <FTName|camelcase>s: <FTName|pascalcase>Fragment[];
</script>

<!-- <CardList
	list={<FTName|camelcase>s.map((c) => {
		return { name: c.name };
	})}
/> -->

<ul>
	{#each <FTName|camelcase>s as <FTName|camelcase>}
		<<FTName|pascalcase>Card {<FTName|camelcase>} />
	{/each}
</ul>
