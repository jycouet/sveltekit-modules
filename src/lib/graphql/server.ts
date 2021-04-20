import { versionModule } from '$lib/modules/version';
import { createApplication } from 'graphql-modules';

export const application = createApplication({
	middlewares: {
		'*': {
			'*': []
		}
	},
	modules: [versionModule]
});
