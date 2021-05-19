<script lang="ts">
	import type { User } from '../../../graphql/_gen/graphqlClient';

	export let user: Pick<User, 'id' | 'name'>;
</script>

<li>{user.id} - {user.name}</li>
