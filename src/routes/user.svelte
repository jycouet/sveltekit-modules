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
	import { GetUsersDocument } from '../lib/graphql/_gen/graphqlClient';
	import type { GetUsersStore } from '../lib/modules/user/ui/GetUsersStoreType';
	import UserAdd from '../lib/modules/user/ui/UserAdd.svelte';
	import UserList from '../lib/modules/user/ui/UserList.svelte';

	export let users: GetUsersStore;
</script>

<UserList users={$users.data.users} />

<UserAdd bind:users />
