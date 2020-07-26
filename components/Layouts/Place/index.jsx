/*
 * Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 *
 * Proprietary and confidential
 *
 * Written by AzaChii <hello@azachii.dev>, July 2020
 *
 * https://azachii.dev/
 *
 * LICENSE file in the root directory of this source tree.
 */

import Head from "next/head";
// TODO: Add theme-color metatag
export default function PlaceLayout({children,head}) {
	return (
		<>
			<Head>
				<title>{head.title ? `${head.title} | Waydda QR` : "Waydda QR"}</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main>
				{children}
			</main>
		</>
	)
}
