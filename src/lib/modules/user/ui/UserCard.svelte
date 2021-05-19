<script lang="ts">
	import type { UserFragment } from '../../../graphql/_gen/graphqlClient';

	export let user: UserFragment;
</script>

<li>{user.id} - {user.name}</li>
