<script lang="ts">
	import { scale } from 'svelte/transition';

	export let name;
	export let isBlue = false;
	export let selected = false;

	function click() {
		selected = !selected;
	}
</script>

<div
	draggable="true"
	in:scale={{ duration: 1000 }}
	class:selected
	class:isBlue
	class="card"
	on:click={click}
>
	{name}
</div>

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
		box-shadow: 2px 2px 2px #999;
	}

	.isBlue {
		border: #40b3ff solid 1px;
	}

	.selected {
		background-color: #ff40007e;
	}

	.isBlue.selected {
		background-color: #40b3ff81;
	}
</style>
