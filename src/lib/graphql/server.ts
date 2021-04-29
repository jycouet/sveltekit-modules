import { versionModule } from '$lib/modules/version';
import { createApplication } from 'graphql-modules';
import { userModule } from '$lib/modules/user';

export const application = createApplication({
	middlewares: {
		'*': {
			'*': []
		}
	},
	modules: [versionModule, userModule]
});
