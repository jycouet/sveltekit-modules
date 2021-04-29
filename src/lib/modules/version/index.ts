import path, { join } from 'path';
import { createModuleHelper } from '../../graphql/helpers/createModuleHelper';
import { resolvers } from './resolvers';

const moduleFolderPath = join(path.resolve(path.dirname('')), 'src/lib/modules/version');

export const versionModule = createModuleHelper({
	id: 'version-module',
	moduleFolderPath,
	resolvers,
	providers: []
});
