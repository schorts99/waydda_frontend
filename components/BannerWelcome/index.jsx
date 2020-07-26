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

export default function BannerWelcome({title}) {
	return (
		<div className="grid grid-cols-12 mb-20 mt-16 items-center">
			<div className="col-span-12 text-center">
				<h1 className="text-3xl md:text-5xl lg:text-6xl font-title font-extrabold">{title}</h1>
				<h3 className="mt-2 text-red-principal font-bold">¡Acceso anticipado!</h3>
			</div>
		</div>
	)
}
