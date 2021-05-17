import path, { join } from 'path';
import { createModuleHelper } from '../../graphql/helpers/createModuleHelper';
import { resolvers } from './_gen/resolvers';

const moduleFolderPath = join(path.resolve(path.dirname('')), 'src/lib/modules/[FTName|camelcase]');

export const [FTName|camelcase]Module = createModuleHelper({
	id: '[FTName|camelcase]-module',
	moduleFolderPath,
	resolvers,
	providers: []
});
