import type { ChannelModule } from '../_gen/module-types';

export const resolvers: ChannelModule.Resolvers = {
	Query: {
		channel: async (_root, args, { injector }: GraphQLModules.Context) => {
			console.log(`args.id`, args.id);
			return {
				id: args.id,
				name: `CHANNEL_${args.id}`
			};
		},
		channels: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return [
				{
					id: '007',
					name: `CHANNEL_${7}`
				},
				{
					id: '008',
					name: `CHANNEL_${8}`
				}
			];
		}
	}
};
