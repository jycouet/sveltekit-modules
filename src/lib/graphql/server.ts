import { createApplication } from 'graphql-modules';
import { userModule } from '$lib/modules/user';
import { channelModule } from '../modules/channel';

export const application = createApplication({
	middlewares: {
		'*': {
			'*': []
		}
	},
	modules: [userModule, channelModule]
});
