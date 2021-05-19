<script lang="ts">
	import type { [FTName|pascalcase] } from '../../../graphql/_gen/graphqlClient';
	import [FTName|pascalcase]Card from './[FTName|pascalcase]Card.svelte';

	export let [FTName|camelcase]s: Array<{ __typename?: '[FTName|pascalcase]' } & Pick<[FTName|pascalcase], 'id' | 'name'>>;
</script>

<ul>
	{#each [FTName|camelcase]s as [FTName|camelcase]}
		<[FTName|pascalcase]Card {[FTName|camelcase]} />
	{/each}
</ul>
