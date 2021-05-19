import type { OperationStore } from '@urql/svelte';
import type { Exact } from '../../../graphql/_gen/global-types';
import type { GetUsersQuery } from '../../../graphql/_gen/graphqlClient';

export type GetUsersStore = OperationStore<
	GetUsersQuery,
	Exact<{
		[key: string]: never;
	}>
>;
