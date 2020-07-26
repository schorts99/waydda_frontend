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

export default function FromAzaChii() {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-10 col-start-2 md:col-span-6 md:col-start-4 my-32 text-center">
				<h2 className="font-title md:text-6xl text-2xl">
					Es fácil comenzar
				</h2>
				<h4 className="my-8 md:text-2xl text-base">Estarás listo y usando todas las funcionalidades en poco tiempo</h4>
				<button
					className="bg-black text-white font-bold text-xs md:text-sm rounded px-8 md:px-12 shadow-2xl w-full md:w-auto py-5 md:py-4">REGISTRARSE
				</button>
				<h6 className="text-xs text-gray-700 font-light mt-8">
					Un servicio de&#160;
					<a
						href="https://azachii.dev"
						target={"_blank"}>
						<strong>
							AzaChii International Group
						</strong>
					</a>
				</h6>
			</div>
		</div>
	)
}
