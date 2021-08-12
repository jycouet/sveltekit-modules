<script lang="ts">
	import type { UserFragment } from '$lib/graphql/_gen/graphqlClient';

	export let user: UserFragment;
</script>

<li>{user.id} - {user.name}</li>
