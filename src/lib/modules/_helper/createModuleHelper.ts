import { loadFilesSync } from '@graphql-tools/load-files';
import { createModule, gql, ModuleConfig, Provider } from 'graphql-modules';
import type { MiddlewareMap } from 'graphql-modules/shared/middleware';
import { join } from 'path';

export const createModuleHelper = function (config: ModuleConfigLight) {
  const globalConfig = {
    ...{
      dirname: config.dirname,
      typeDefs: gql(
        loadFilesSync(
          join(config.dirname.replace('/build/', '/src/'), './typedefs/*.gql')
        ).join()
      ),
      resolvers: loadFilesSync(join(config.dirname, './resolvers/*.(j|t)s')),
    },
    ...config,
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
   * Pass `__dirname` variable as a value to get better error messages.
   */
  dirname: string;
  /**
   * A map of middlewares - read the ["Middlewares"](./advanced/middlewares) chapter.
   */
  middlewares?: MiddlewareMap;
  /**
   * A list of Providers - read the ["Providers and Tokens"](./di/providers) chapter.
   */
  providers?: Provider[] | (() => Provider[]);
}
