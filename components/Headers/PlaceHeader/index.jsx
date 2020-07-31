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

import Link from "next/link";

export default function PlaceHeader({}) {
	return (
		<header className="grid grid-cols-12 bg-dark z-20 px-3 py-3 md:px-12 md:py-4">
			<div className="col-span-12">
				<h2 className="font-title text-2xl font-extrabold z-20 text-white">
					<Link href="/">
						<a>Waydda</a>
					</Link>
				</h2>
			</div>
		</header>
	)
}
