<script context="module">
	export async function load({ page, context }) {
		return {
			props: {
				channels: await context.query(GetChannelsDocument)
			}
		};
	}
</script>

<script lang="ts">
	import { GetChannelsDocument } from '../lib/graphql/_gen/graphqlClient';
	import ChannelAdd from '../lib/modules/channel/ui/ChannelAdd.svelte';
	import ChannelList from '../lib/modules/channel/ui/ChannelList.svelte';
	import type { GetChannelsStore } from '../lib/modules/channel/ui/GetChannelsStoreType';

	export let channels: GetChannelsStore;
</script>

<ChannelList channels={$channels.data.channels} />

<ChannelAdd bind:channels />
