<script context="module">
	import { browser, dev } from '$app/env';
	import { createClient } from '$lib/graphql/client';
	import { operationStore, setClient } from '@urql/svelte';
	import { get, readable } from 'svelte/store';
	import { MenuMapping } from '../lib/helper/MenuMapping';
	import Menu from '../lib/ui/Menu.svelte';
	import PageTitle from '../lib/ui/PageTitle.svelte';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, context }) {
		const client = await createClient({
			url: 'http://localhost:3000/graphql',
			// Pass in the fetch from sveltekit to have access to serialized requests during hydration
			fetch,
			dev: browser && dev
		});
		return {
			context: {
				...context,
				client,
				// Works just like query from @urql/svelte
				query: async (query, variables, context, normalize) => {
					if (typeof variables == 'function') {
						[normalize, variables, context] = [variables];
					} else if (typeof context == 'function') {
						[normalize, context] = [context];
					}

					const store = operationStore(query, variables, context);
					const result = await client
						.query(store.query, store.variables, store.context)
						.toPromise();
					Object.assign(get(store), result);

					if (normalize) {
						const { subscribe } = store;

						return Object.create(store, {
							subscribe: {
								enumerable: true,
								value: readable(store, (set) => {
									const unsubscribe = subscribe((result) => {
										if (result.data) {
											Object.assign(result.data, normalize(result.data, result));
										}
										set(result);
									});

									return unsubscribe;
								}).subscribe
							}
						});
					}

					return store;
				}
			},
			props: { client, pageTitle: MenuMapping[page.path] }
		};
	}
</script>

<script>
	/**
	 * @type {import('@urql/svelte').Client}
	 */
	export let client;
	export let pageTitle;

	setClient(client);
</script>

<Menu />
<PageTitle {pageTitle} />

<main class="p">
	<slot />
</main>

<style>
	.p {
		padding: 1rem;
	}
</style>
