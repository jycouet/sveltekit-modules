import type { ChannelModule } from '../_gen/module-types';

export const resolvers: ChannelModule.Resolvers = {
	Mutation: {
		addUserInChannel: async (_root, args, { injector }: GraphQLModules.Context) => {
			console.log(`TODO: addUserInChannel`);
			return {
				id: `${args.idChannel}`,
				name: 'ChannelName...',
				users: [
					{
						id: `${args.idUser}`,
						name: 'UserName...'
					}
				]
			};
		},
		removeUserInChannel: async (_root, _args, { injector }: GraphQLModules.Context) => {
			console.log(`TODO: removeUserInChannel`);
			return true;
		}
	}
};
