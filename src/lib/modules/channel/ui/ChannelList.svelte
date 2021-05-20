<script lang="ts">
	import type { ChannelFragment } from '$lib/graphql/_gen/graphqlClient';
	import CardList from '$lib/ui/CardList.svelte';
	import ChannelCard from './ChannelCard.svelte';

	export let channels: ChannelFragment[];
</script>

<CardList
	list={channels.map((c) => {
		return { name: c.name };
	})}
	isBlue
/>

<!-- <ul>
	{#each channels as channel}
		<ChannelCard {channel} />
	{/each}
</ul> -->
