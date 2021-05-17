import path, { join } from 'path';
import { createModuleHelper } from '../../graphql/helpers/createModuleHelper';
import { resolvers } from './_gen/resolvers';

const moduleFolderPath = join(path.resolve(path.dirname('')), 'src/lib/modules/chat');

export const chatModule = createModuleHelper({
	id: 'chat-module',
	moduleFolderPath,
	resolvers,
	providers: []
});
