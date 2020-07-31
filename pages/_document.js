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

import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
	
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon.ico"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
					<link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
					<meta name="facebook-domain-verification" content="p8zbzkp4c30r8bldnbatw2tvtpfslx"/>
					<link
						crossOrigin="anonymous"
						rel="prefetch"
						type="font/woff2"
						as="font"
						href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;900&display=swap"/>
				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument