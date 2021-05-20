import type { ChannelModule } from '../_gen/module-types';

export const resolvers: ChannelModule.Resolvers = {
	Mutation: {
		addUserOnChannel: async (_root, args, { injector }: GraphQLModules.Context) => {
			console.log(`TODO: addUserOnChannel`);
			console.log(`idUser`, args.idUser);
			console.log(`idChannel`, args.idChannel);
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
		removeUserOnChannel: async (_root, _args, { injector }: GraphQLModules.Context) => {
			console.log(`TODO: removeUserOnChannel`);
			return true;
		}
	}
};
