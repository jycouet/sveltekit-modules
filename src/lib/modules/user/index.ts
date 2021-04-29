import path, { join } from 'path';
import { createModuleHelper } from '../../graphql/helpers/createModuleHelper';
import { resolvers } from './resolvers';

const moduleFolderPath = join(path.resolve(path.dirname('')), 'src/lib/modules/user');

export const userModule = createModuleHelper({
	id: 'user-module',
	moduleFolderPath,
	resolvers,
	providers: []
});
