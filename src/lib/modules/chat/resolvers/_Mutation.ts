import type { ChatModule } from '../_gen/module-types';

export const resolvers: ChatModule.Resolvers = {
	Mutation: {
		createChat: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return {
				id: '🚀 007 🚀',
				name: 'Chat created!'
			};
		}
	}
};
