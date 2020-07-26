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

export default function NotFoundPage() {
	return (
		<>
			<Head>
				<title>Página no encontrada | Waydda</title>
			</Head>
			<div className="grid grid-cols-12 h-screen items-center">
				<div className="col-span-10 col-start-2 text-center">
					<h1 className="text-6xl font-title font-extrabold">404</h1>
				</div>
			</div>
		</>
	)
}
