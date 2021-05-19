<script lang="ts">
	import type { User } from '../../../graphql/_gen/graphqlClient';
	import UserCard from './UserCard.svelte';

	export let users: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>;
</script>

<ul>
	{#each users as user}
		<UserCard {user} />
	{/each}
</ul>
