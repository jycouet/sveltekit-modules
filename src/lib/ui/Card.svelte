<script lang="ts">
	import { scale } from 'svelte/transition';

	export let name;
</script>

<div transition:scale={{ duration: 1000 }} class="card">{name}</div>

<style>
	.card {
		display: flex;
		margin: 1rem;
		padding: 1rem;
		border: #ff3e00 solid 1px;
		width: 150px;
		height: 150px;
		align-items: center;
		justify-content: center;
	}
</style>
