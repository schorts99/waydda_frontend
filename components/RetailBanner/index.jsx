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

export default function RetailBanner() {
	return (
		<div className="grid grid-cols-12 mb-12">
			<div className="col-span-12 px-8 py-12 bg-purple-principal shadow-2xl rounded">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-6">
						<h2 className="text-2xl md:text-5xl text-white font-bold">¿Listo para llevar tu negocio al mundo
							digital?</h2>
						<h4 className="text-sm md:text-base text-white mt-5">
							Cada semana se agregan nuevas actualizaciones y funcionalidades sin ningún costo.
						</h4>
					</div>
					<div className="col-span-12 md:col-span-6 mt-6 md:mt-0">
						<button
							className="bg-white hover:bg-purple-600 md:w-auto w-full px-4 py-4 text-purple-800 hover:text-white font-bold">
							REGISTRARSE
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}