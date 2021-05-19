<script lang="ts">
	import { mutation, operationStore } from '@urql/svelte';
	import { CreateChannelDocument } from '../../../graphql/_gen/graphqlClient';

	export let channels;
	let newName = '';

	const createChannelStore = operationStore(CreateChannelDocument);
	const createChannelMutation = mutation(createChannelStore);

	async function addChannel() {
		const result = await createChannelMutation({ name: newName });
		$channels.data.channels = [...$channels.data.channels, result.data.createChannel];
		newName = '';
	}
</script>

<form>
	<input type="text" bind:value={newName} />
	<button on:click|preventDefault={addChannel}>Add</button>
</form>
{#if $createChannelStore.data}
	<div>
		Channel: "{$createChannelStore.data.createChannel.id} - {$createChannelStore.data.createChannel
			.name}" created!
	</div>
{/if}
