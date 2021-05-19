<script lang="ts">
	import type { [FTName|pascalcase]Fragment } from '../../../graphql/_gen/graphqlClient';
	import [FTName|pascalcase]Card from './[FTName|pascalcase]Card.svelte';

	export let [FTName|camelcase]s: [FTName|pascalcase]Fragment[];
</script>

<ul>
	{#each [FTName|camelcase]s as [FTName|camelcase]}
		<[FTName|pascalcase]Card {[FTName|camelcase]} />
	{/each}
</ul>
