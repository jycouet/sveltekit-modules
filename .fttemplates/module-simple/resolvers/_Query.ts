import type { [FTName|pascalcase]Module } from '../_gen/module-types';

export const resolvers: [FTName|pascalcase]Module.Resolvers = {
	Query: {
		[FTName|camelcase]: async (_root, args, { injector }: GraphQLModules.Context) => {
			console.log(`args.id`, args.id);
			return {
				id: args.id,
				name: 'JYC'
			};
		},
		[FTName|camelcase]s: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return [{
				id: '007',
				name: 'JYC_7'
			},{
				id: '008',
				name: 'JYC_8'
			}];
		}
	}
};
