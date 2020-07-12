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

import ResponsiveImage from "../ResponsiveImage";

export default function SimpleRegister() {
	return (
		<div className="grid grid-cols-12 justify-center mb-16">
			<div className="col-span-3 hidden md:block">
				<ResponsiveImage
					publicId={"kingdom-8.svg"}
					height={1000}
				/>
			</div>
			<form className="col-span-10 col-start-2 md:col-start-0 md:col-span-6">
				<div className="grid grid-cols-12 items-center">
					<div className="col-span-7 md:col-span-8">
						<input
							required
							placeholder="Ingresa tu correo electrónico"
							type="email"
							className="border-2 w-full border-black py-5 px-4 focus:outline-none text-lg font-semibold placeholder-black"/>
					</div>
					<div className="col-span-5 md:col-span-4 h-full">
						<button
							className="bg-black text-white h-full uppercase w-full text-sm font-bold md:text-base focus:border-none focus:outline-none">
							Registrarse
						</button>
					</div>
				</div>
			</form>
			<div className="col-span-3 hidden md:block"></div>
		</div>
	)
}