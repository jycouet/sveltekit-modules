<script context="module">
	export async function load({ page, context }) {
		return {
			props: {
				users: await context.query(GetUsersDocument),
				channels: await context.query(GetChannelsDocument)
			}
		};
	}
</script>

<script lang="ts">
	import {
		GetChannelsDocument,
		GetChannelsQueryStore,
		GetUsersDocument,
		GetUsersQueryStore
	} from '../lib/graphql/_gen/graphqlClient';
	import ChannelList from '../lib/modules/channel/ui/ChannelList.svelte';
	import UserList from '../lib/modules/user/ui/UserList.svelte';

	export let users: GetUsersQueryStore;
	export let channels: GetChannelsQueryStore;
</script>

<UserList users={$users.data.users} />
<ChannelList channels={$channels.data.channels} />
