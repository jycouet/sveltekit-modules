<script lang="ts">
	import type { ChannelFragment } from '../../../graphql/_gen/graphqlClient';
	import ChannelCard from './ChannelCard.svelte';

	export let channels: ChannelFragment[];
</script>

<ul>
	{#each channels as channel}
		<ChannelCard {channel} />
	{/each}
</ul>
