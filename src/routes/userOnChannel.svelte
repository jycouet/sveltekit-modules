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
	import { GetChannelsDocument, GetUsersDocument } from '../lib/graphql/_gen/graphqlClient';
	import ChannelList from '../lib/modules/channel/ui/ChannelList.svelte';
	import type { GetChannelsStore } from '../lib/modules/channel/ui/GetChannelsStoreType';
	import type { GetUsersStore } from '../lib/modules/user/ui/GetUsersStoreType';
	import UserList from '../lib/modules/user/ui/UserList.svelte';

	export let users: GetUsersStore;
	export let channels: GetChannelsStore;
</script>

<UserList users={$users.data.users} />
<ChannelList channels={$channels.data.channels} />
