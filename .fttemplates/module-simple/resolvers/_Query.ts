import type { [FTName|pascalcase]Module } from '../_gen/module-types';

export const resolvers: [FTName|pascalcase]Module.Resolvers = {
	Query: {
		[FTName|camelcase]: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return {
				id: '007',
				name: 'JYC'
			};
		}
	}
};
