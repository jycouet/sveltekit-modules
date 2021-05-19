import type { UserModule } from '../_gen/module-types';

export const resolvers: UserModule.Resolvers = {
	Mutation: {
		createUser: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return {
				id: 'newId 🚀',
				name: _args.name
			};
		}
	}
};
