import { VersionModule } from '../_gen/module-types';

export const resolvers: VersionModule.Resolvers = {
  Mutation: {
    boostServer: async (_root, _args, { injector }: GraphQLModules.Context) => {
      return '🚀 Server boosted 🚀';
    },
  },
};
