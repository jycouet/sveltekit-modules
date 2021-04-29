import type { UserModule } from '../_gen/module-types';

export const resolvers: UserModule.Resolvers = {
	Query: {
		user: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return {
				id: '007',
				name: 'JYC'
			};
		}
	}
};
