import type { VersionModule } from '../_gen/module-types';

export const resolvers: VersionModule.Resolvers = {
	Query: {
		version: () => {
			return {
				releaseVersion: process.env.HEROKU_RELEASE_VERSION || 'v007',
				releaseCreatedAtUtc: process.env.HEROKU_RELEASE_CREATED_AT || '1986-11-07T04:05:06Z',
				appVersion: 'v5.2'
			};
		}
	}
};
