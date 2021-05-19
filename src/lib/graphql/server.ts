import { createApplication } from 'graphql-modules';
import { userModule } from '$lib/modules/user';

export const application = createApplication({
	middlewares: {
		'*': {
			'*': []
		}
	},
	modules: [userModule]
});
