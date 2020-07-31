/*
 *  Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *
 *  Proprietary and confidential
 *
 *  Written by AzaChii <hello@azachii.dev>, July 2020
 *
 *  https://azachii.dev/
 *
 *  LICENSE file in the root directory of this source tree.
 */


// TODO: Add facebook pixel

import '../css/main.css';
import 'react-slideshow-image/dist/styles.css';
import {ApolloProvider} from '@apollo/react-hooks'
import withApollo from "../lib/withApollo"
import NProgress from "../components/Nprogress";

export function reportWebVitals(metrics) {
	console.log("ID", metrics)
}

function WayddaApp({Component, pageProps, apolloClient}) {
	
	
	return (
		<>
			
			<ApolloProvider client={apolloClient}>
				<NProgress
				/>
				<Component {...pageProps} />
			</ApolloProvider>
		</>
	);
}

export default withApollo(WayddaApp)
