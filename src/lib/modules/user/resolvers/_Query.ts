import type { UserModule } from '../_gen/module-types';

export const resolvers: UserModule.Resolvers = {
	Query: {
		user: async (_root, args, { injector }: GraphQLModules.Context) => {
			console.log(`args.id`, args.id);
			return {
				id: '007',
				name: 'JYC'
			};
		},
		users: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return [
				{
					id: '007',
					name: 'JYC'
				},
				{
					id: '008',
					name: 'JYC'
				}
			];
		}
	}
};
