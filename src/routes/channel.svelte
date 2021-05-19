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
	import type { OperationStore } from '@urql/svelte';
	import type { Exact } from '../lib/graphql/_gen/global-types';
	import type { GetChannelsQuery } from '../lib/graphql/_gen/graphqlClient';
	import { GetChannelsDocument } from '../lib/graphql/_gen/graphqlClient';

	export let channels: OperationStore<
		GetChannelsQuery,
		Exact<{
			[key: string]: never;
		}>
	>;
</script>

<svelte:head>
	<title>SvelteKit - GraphQL</title>
</svelte:head>

<main>
	<h4>Channels...</h4>

	<ul>
		{#each $channels.data.channels as channel}
			<li>{channel.id} - {channel.name}</li>
		{/each}
	</ul>
</main>
