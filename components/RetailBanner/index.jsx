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
import Link from 'next/link'

export default function RetailBanner() {
	return (
		<div className="grid grid-cols-12 mb-12 mt-10">
			<div className="col-span-12 px-8 py-12 md:py-20 md:px-12 bg-purple-principal shadow-2xl rounded">
				<div className="grid grid-cols-12 items-center">
					<div className="col-span-12 md:col-span-8">
						<h2 className="text-2xl md:text-5xl text-white font-bold">¿Listo para llevar tu negocio al mundo
							digital?</h2>
						<h4 className="text-sm md:text-base text-white mt-5">
							Cada semana se agregan nuevas actualizaciones y funcionalidades sin ningún costo.
						</h4>
					</div>
					<div className="col-span-12 md:col-span-4 mt-6 justify-end flex md:mt-0">
						<Link href={"/sign-up"}>
							<a
								className="bg-white hover:bg-purple-600 text-center md:w-auto w-full px-8 shadow-2xl py-4 text-purple-800 hover:text-white font-bold">
								REGISTRARSE
							</a>
						</Link>

					</div>
				</div>
			</div>
		</div>
	)
}
