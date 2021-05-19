<script lang="ts">
	import type { UserFragment } from '../../../graphql/_gen/graphqlClient';
	import UserCard from './UserCard.svelte';

	export let users: UserFragment[];
</script>

<ul>
	{#each users as user}
		<UserCard {user} />
	{/each}
</ul>
