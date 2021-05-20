import type { <OnWhatEntity|pascalcase>Module } from '../_gen/module-types';

export const resolvers: <OnWhatEntity|pascalcase>Module.Resolvers = {
	Mutation: {
		add<FTName|pascalcase>In<OnWhatEntity|pascalcase>: async (_root, args, { injector }: GraphQLModules.Context) => {
			console.log(`TODO: add<FTName|pascalcase>In<OnWhatEntity|pascalcase>`);
			return {
				id: `${args.id<OnWhatEntity|pascalcase>}`,
				name: '<OnWhatEntity|pascalcase>Name...',
				<FTName|camelcase>s: [
					{
						id: `${args.id<FTName|pascalcase>}`,
						name: '<FTName|pascalcase>Name...'
					}
				]
			};
		},
		remove<FTName|pascalcase>In<OnWhatEntity|pascalcase>: async (_root, _args, { injector }: GraphQLModules.Context) => {
			console.log(`TODO: remove<FTName|pascalcase>In<OnWhatEntity|pascalcase>`);
			return true;
		}
	}
};
