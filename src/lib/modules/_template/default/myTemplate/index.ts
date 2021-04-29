import path from 'path';
import { createModule, gql } from 'graphql-modules';
import { resolvers as _Query } from './resolvers/_Query';
import { resolvers as _Mutation } from './resolvers/_Mutation';
import * as fs from 'fs';

__dirname = path.resolve(path.dirname(''));

export const versionModule = createModule({
	id: 'version-module',
	dirname: __dirname,
	providers: [],
	typeDefs: [
		gql(fs.readFileSync('./src/lib/modules/version/typedefs/_Mutation.gql', 'utf8')),
		gql(fs.readFileSync('./src/lib/modules/version/typedefs/_Query.gql', 'utf8')),
		gql(fs.readFileSync('./src/lib/modules/version/typedefs/TYPE.Version.gql', 'utf8'))
	],
	resolvers: [_Mutation, _Query]
});
