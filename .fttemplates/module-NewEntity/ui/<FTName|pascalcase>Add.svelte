<script lang="ts">
	import { mutation, operationStore } from '@urql/svelte';
	import { Create<FTName|pascalcase>Document } from '../../../graphql/_gen/graphqlClient';

	export let <FTName|camelcase>s;
	let newName = '';

	const create<FTName|pascalcase>Store = operationStore(Create<FTName|pascalcase>Document);
	const create<FTName|pascalcase>Mutation = mutation(create<FTName|pascalcase>Store);

	async function add<FTName|pascalcase>() {
		const result = await create<FTName|pascalcase>Mutation({ name: newName });
		$<FTName|camelcase>s.data.<FTName|camelcase>s = [...$<FTName|camelcase>s.data.<FTName|camelcase>s, result.data.create<FTName|pascalcase>];
		newName = '';
	}
</script>

<form>
	<input type="text" bind:value={newName} />
	<button on:click|preventDefault={add<FTName|pascalcase>}>Create</button>
</form>
{#if $create<FTName|pascalcase>Store.data}
	<div>
		<FTName|pascalcase>: "{$create<FTName|pascalcase>Store.data.create<FTName|pascalcase>.id} - {$create<FTName|pascalcase>Store.data.create<FTName|pascalcase>.name}" created!
	</div>
{/if}
