<script lang="ts">
	export let pageTitle;
</script>

<svelte:head>
	<title>SvelteKit - Modules | {pageTitle}</title>
</svelte:head>

<h2>Page: {pageTitle}</h2>

<style>
	h2 {
		padding: 1rem;
		margin: 0;
		border-bottom: #ff3e00 solid 1px;
	}
</style>
