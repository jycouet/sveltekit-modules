import type { OperationStore } from '@urql/svelte';
import type { Exact } from '../../../graphql/_gen/global-types';
import type { GetChannelsQuery } from '../../../graphql/_gen/graphqlClient';

export type GetChannelsStore = OperationStore<
	GetChannelsQuery,
	Exact<{
		[key: string]: never;
	}>
>;
