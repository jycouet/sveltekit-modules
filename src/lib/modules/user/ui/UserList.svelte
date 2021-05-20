<script lang="ts">
	import type { UserFragment } from '$lib/graphql/_gen/graphqlClient';
	import CardList from '$lib/ui/CardList.svelte';
	import UserCard from './UserCard.svelte';

	export let users: UserFragment[];
</script>

<CardList
	list={users.map((c) => {
		return { name: c.name };
	})}
/>

<!-- <ul>
	{#each users as user}
		<UserCard {user} />
	{/each}
</ul> -->
