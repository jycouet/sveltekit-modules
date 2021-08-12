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
	import { GetUsersDocument } from '$lib/graphql/_gen/graphqlClient';
	import type { GetUsersQueryStore } from '$lib/graphql/_gen/graphqlClient';
	import UserAdd from '../lib/modules/user/ui/UserAdd.svelte';
	import UserList from '../lib/modules/user/ui/UserList.svelte';

	export let users: GetUsersQueryStore;
</script>

<UserList users={$users.data.users} />

<UserAdd bind:users />
