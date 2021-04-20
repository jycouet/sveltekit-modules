import { versionModule } from '$lib/modules/version';
import { createApplication } from 'graphql-modules';

const application = createApplication({
  // middlewares: {
  //   '*': {
  //     '*': [whiteListAuthMiddleware],
  //   },
  // },
  modules: [
    versionModule,
    
  ],
});
