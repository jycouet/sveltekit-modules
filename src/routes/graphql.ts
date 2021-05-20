import { application } from '$lib/graphql/server';
import type { RequestHandler, Response } from '@sveltejs/kit';
import { getGraphQLParameters } from 'graphql-helix/dist/get-graphql-parameters.js';
import { processRequest } from 'graphql-helix/dist/process-request.js';
import { renderGraphiQL } from 'graphql-helix/dist/render-graphiql.js';
import { shouldRenderGraphiQL } from 'graphql-helix/dist/should-render-graphiql.js';

export const defaultQuery = `# Try out SvelteKit - Modules:
query GetUsers{
	users {
		id
		name
	}
}

mutation AddUserInChannel($idUser: String!, $idChannel: String!) {
  addUserInChannel(idUser: $idUser, idChannel: $idChannel){
    id
    name
    users{
      id
      name
    }
  }
}

`;

const respond = async (request): Promise<Response> => {
	// Workaround for a bug with body parsing in SvelteKit
	if (typeof request.body === 'string') request.body = JSON.parse(request.body);

	if (shouldRenderGraphiQL(request)) {
		return {
			body: renderGraphiQL({
				defaultQuery
			}),
			headers: { 'Content-Type': 'text/html' },
			status: 200
		};
	}

	// Extract the GraphQL parameters from the request
	const { operationName, query, variables } = getGraphQLParameters(request);

	// Validate and execute the query
	const result = await processRequest({
		operationName,
		query,
		variables,
		request,
		schema: application.schema,
		execute: application.createExecution()
		// subscribe: application.createSubscription(),
	});

	// processRequest returns one of three types of results depending on how the server should respond
	// 1) RESPONSE: a regular JSON payload
	// 2) MULTIPART RESPONSE: a multipart response (when @stream or @defer directives are used)
	// 3) PUSH: a stream of events to push back down the client for a subscription
	if (result.type === 'RESPONSE') {
		// We set the provided status and headers and just the send the payload back to the client
		const headers = {};

		for (const { name, value } of result.headers) {
			headers[name] = value;
		}

		return {
			body: result.payload,
			headers,
			status: result.status
		};
	}

	// const parameters = getGraphQLParameters(request);
	// const result = await processRequest({
	// 	...parameters,
	// 	// For example, auth information is put in context for the resolver
	// 	contextFactory: () => ({ authorization: request.headers["Authorization"] ?? request.headers["authorization"] }),
	// 	request,
	// 	schema: application.schema,
	// });

	// if (result.type === "RESPONSE") {
	// 	const headers = {};

	// 	for (const { name, value } of result.headers) {
	// 		headers[name] = value;
	// 	}

	// 	return {
	// 		body: result.payload,
	// 		headers,
	// 		status: result.status,
	// 	};
	// }

	return {
		// Think you could help? https://github.com/svelte-add/graphql/issues/1
		body: "svelte-add/graphql doesn't support multipart responses or event streams",
		headers: {},
		status: 501
	};
};

export const del: RequestHandler = ({ body, headers, query }) =>
	respond({ body, headers, method: 'DELETE', query });
export const get: RequestHandler = ({ body, headers, query }) =>
	respond({ body, headers, method: 'GET', query });
export const head: RequestHandler = ({ body, headers, query }) =>
	respond({ body, headers, method: 'HEAD', query });
export const post: RequestHandler = ({ body, headers, query }) =>
	respond({ body, headers, method: 'POST', query });
export const put: RequestHandler = ({ body, headers, query }) =>
	respond({ body, headers, method: 'PUT', query });
