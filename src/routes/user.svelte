<script context="module">
	export async function load({ page, context }) {
		return {
			props: {
				users: await context.query(GetUsersDocument)
			}
		};
	}
</script>

<script lang="ts">
	import type { OperationStore } from '@urql/svelte';
	import { mutation, operationStore, query } from '@urql/svelte';
	import type { Exact } from '../lib/graphql/_gen/global-types';
	import type { GetUsersQuery } from '../lib/graphql/_gen/graphqlClient';
	import { CreateUserDocument, GetUsersDocument } from '../lib/graphql/_gen/graphqlClient';

	export let users: OperationStore<
		GetUsersQuery,
		Exact<{
			[key: string]: never;
		}>
	>;

	//let usersQuery = query(users);
	let newName = '';

	const createUserStore = operationStore(CreateUserDocument);
	const createUserMutation = mutation(createUserStore);

	async function addUser() {
		const result = await createUserMutation({ name: newName });
		$users.data.users = [...$users.data.users, result.data.createUser];
		newName = '';
	}
</script>

<svelte:head>
	<title>SvelteKit - GraphQL</title>
</svelte:head>

<main>
	<h4>Users...</h4>

	<ul>
		{#each $users.data.users as user}
			<li>{user.id} - {user.name}</li>
		{/each}
	</ul>

	<!-- {#if $usersQuery.error}
		<p>Oh no... {$usersQuery.error}</p>
	{:else if $usersQuery.fetching}
		<p>Loading...</p>
	{:else}
		<ul>
			{#each $usersQuery.data.users as user}
				<li>{user.id} - {user.name}</li>
			{/each}
		</ul>
	{/if} -->

	<form>
		<input type="text" bind:value={newName} />
		<button on:click|preventDefault={addUser}>Add</button>
	</form>
	{#if $createUserStore.data}
		<div>
			User: "{$createUserStore.data.createUser.id} - {$createUserStore.data.createUser.name}"
			created!
		</div>
	{/if}
</main>
