// /*
//  * Copyright (c) AzaChii and its affiliates. All Rights Reserved.
//  *
//  * Unauthorized copying of this file, via any medium is strictly prohibited
//  *
//  * Proprietary and confidential
//  *
//  * Written by Angel Mendez <hello@azachii.dev>, Jun 2020
//  *
//  * https://azachii.dev
//  *
//  * LICENSE file in the root directory of this source tree.
//  */
//
// import { ApolloClient } from 'apollo-client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
//
// export default function createApolloClient(initialState, ctx) {
// 	// The `ctx` (NextPageContext) will only be present on the server.
// 	// use it to extract auth headers (ctx.req) or similar.
// 	return new ApolloClient({
// 		ssrMode: Boolean(ctx),
// 		link: new HttpLink({
// 			uri: 'http://localhost:3001/graphql', // Server URL (must be absolute)
// 			credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
// 		}),
// 		cache: new InMemoryCache().restore(initialState),
// 	})
// }