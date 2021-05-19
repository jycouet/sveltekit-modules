import type { OperationStore } from '@urql/svelte';
import type { Exact } from '../../../graphql/_gen/global-types';
import type { Get<FTName|pascalcase>sQuery } from '../../../graphql/_gen/graphqlClient';

export type Get<FTName|pascalcase>sStore = OperationStore<
	Get<FTName|pascalcase>sQuery,
	Exact<{
		[key: string]: never;
	}>
>;
