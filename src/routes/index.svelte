<script context="module">
	export async function load({ page, context }) {
		return {
			props: {
				users: await context.query(GetUsersDocument)
			}
		};
	}
</script>

<script>
	import { mutation, operationStore, query } from '@urql/svelte';
	import { CreateUserDocument, GetUsersDocument } from '../lib/graphql/_gen/graphqlClient';

	/**
	 * @type {import('@urql/svelte').OperationStore}
	 */
	export let users;
	let usersQuery = query(users);
	let newName = '';

	const createUserStore = operationStore(CreateUserDocument);
	const createUserMutation = mutation(createUserStore);

	async function addUser() {
		await createUserMutation({ name: newName });
		newName = '';
	}
</script>

<svelte:head>
	<title>SvelteKit - GraphQL</title>
</svelte:head>

<main>
	{#if $usersQuery.error}
		<p>Oh no... {$usersQuery.error}</p>
	{:else if $usersQuery.fetching}
		<p>Loading...</p>
	{:else}
		<ul>
			{#each $usersQuery.data.users as user}
				<li>{user.id} - {user.name}</li>
			{/each}
		</ul>
	{/if}

	<input type="text" bind:value={newName} />
	<button type="button" on:click={addUser}>Add</button>
	{#if $createUserStore.data}
		<div>
			User"{$createUserStore.data.createUser.id}" created!
		</div>
	{/if}
</main>
