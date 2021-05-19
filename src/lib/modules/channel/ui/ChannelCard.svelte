<script lang="ts">
	import type { ChannelFragment } from '../../../graphql/_gen/graphqlClient';

	export let channel: ChannelFragment;
</script>

<li>{channel.id} - {channel.name}</li>
