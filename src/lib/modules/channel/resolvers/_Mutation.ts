import type { ChannelModule } from '../_gen/module-types';

export const resolvers: ChannelModule.Resolvers = {
	Mutation: {
		createChannel: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return {
				id: 'newId 🚀',
				name: _args.name
			};
		}
	}
};
