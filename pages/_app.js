/*
 * Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 *
 * Proprietary and confidential
 *
 * Written by Angel Mendez <hello@azachii.dev>, Jun 2020
 *
 * https://azachii.dev
 *
 * LICENSE file in the root directory of this source tree.
 */


// TODO: Add facebook pixel

import '../css/main.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import ReactPixel from 'react-facebook-pixel';
import NextNprogress from 'nextjs-progressbar';

export default function WayddaApp({Component, pageProps}) {
	
	return (
		<>
			<NextNprogress
				color="#29D"
				startPosition="0.3"
				stopDelayMs="200"
				height="3"
				options={{showSpinner: false}}
			/>
			<Component {...pageProps} />
		</>
	);
}