import { versionModule } from '$lib/modules/version';
import { createApplication } from 'graphql-modules';
import { userModule } from '$lib/modules/user';
import { chatModule } from '../modules/chat';

export const application = createApplication({
	middlewares: {
		'*': {
			'*': []
		}
	},
	modules: [versionModule, userModule, chatModule]
});
