import { loadFilesSync } from '@graphql-tools/load-files';
import { createModule, gql, ModuleConfig, Provider, Resolvers } from 'graphql-modules';
import type { MiddlewareMap } from 'graphql-modules/shared/middleware';
import { join } from 'path';

export const createModuleHelper = function (config: ModuleConfigLight) {
	const globalConfig = {
		...{
			dirname: config.moduleFolderPath,
			typeDefs: gql(
				loadFilesSync(
					join(config.moduleFolderPath.replace('/build/', '/src/'), './typedefs/*.gql')
				).join()
			),
			// not working... ERROR: SyntaxError: Cannot use import statement outside a module
			// resolvers: loadFilesSync(join(config.moduleFolderPath, './resolvers/*.(j|t)s'))
			resolvers: config.resolvers
		},
		...config
	} as ModuleConfig;
	return createModule(globalConfig);
};

/**
 * A lighter Module Config following the convention of types in typedefs folder and revolvers in resolvers folder
 */
export interface ModuleConfigLight {
	/**
	 * Unique identifier of a module
	 */
	id: string;
	/**
	 * Pass `__dirname` (moduleFolderPath) variable as a value to get better error messages.
	 */
	moduleFolderPath: string;
	/**
	 * An object or a list of GraphQL resolve functions.
	 */
	resolvers?: Resolvers;
	/**
	 * A map of middlewares - read the ["Middlewares"](./advanced/middlewares) chapter.
	 */
	middlewares?: MiddlewareMap;
	/**
	 * A list of Providers - read the ["Providers and Tokens"](./di/providers) chapter.
	 */
	providers?: Provider[] | (() => Provider[]);
}
