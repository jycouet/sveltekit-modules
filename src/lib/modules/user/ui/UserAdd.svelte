<script lang="ts">
	import { mutation, operationStore } from '@urql/svelte';
	import { CreateUserDocument } from '../../../graphql/_gen/graphqlClient';

	export let users;
	let newName = '';

	const createUserStore = operationStore(CreateUserDocument);
	const createUserMutation = mutation(createUserStore);

	async function addUser() {
		const result = await createUserMutation({ name: newName });
		$users.data.users = [...$users.data.users, result.data.createUser];
		newName = '';
	}
</script>

<form>
	<input type="text" bind:value={newName} />
	<button on:click|preventDefault={addUser}>Add</button>
</form>
{#if $createUserStore.data}
	<div>
		User: "{$createUserStore.data.createUser.id} - {$createUserStore.data.createUser.name}" created!
	</div>
{/if}
