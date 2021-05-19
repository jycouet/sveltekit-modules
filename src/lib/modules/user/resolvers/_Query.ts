import type { UserModule } from '../_gen/module-types';

export const resolvers: UserModule.Resolvers = {
	Query: {
		user: async (_root, args, { injector }: GraphQLModules.Context) => {
			console.log(`args.id`, args.id);
			return {
				id: args.id,
				name: `USER_${args.id}`
			};
		},
		users: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return [
				{
					id: '007',
					name: `USER_${7}`
				},
				{
					id: '008',
					name: `USER_${8}`
				}
			];
		}
	}
};
