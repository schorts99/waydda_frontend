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
		<div className="grid grid-cols-12 justify-center gap-4 mb-16">
			<div className="col-span-3 hidden md:block mx-auto">
				<ResponsiveImage
					publicId={"kingdom-4.svg"}
					className="h-56"
					height={1000}
					wrapperClass=""
				/>
			</div>
			<form className="col-span-10 col-start-2 md:col-start-0 md:col-span-6">
				<div className="grid grid-cols-12 items-center">
					<div className="col-span-7 md:col-span-8">
						<input
							required
							placeholder="Ingresa tu correo electrónico"
							type="email"
							className="border-2 w-full border-black py-5 px-4 focus:outline-none text-sm md:text-lg font-semibold placeholder-black"/>
					</div>
					<div className="col-span-5 md:col-span-4 h-full">
						<button
							className="bg-black text-white h-full uppercase w-full text-sm font-bold md:text-base focus:border-none focus:outline-none">
							Registrarse
						</button>
					</div>
					<div className="hidden md:block mx-auto col-span-12 justify-center mt-12">
						<button className="bg-red-principal rounded shadow py-4 px-6 font-bold text-white">VER DEMOSTRACIÓN</button>
					</div>
				</div>
			</form>
			<div className="col-span-3 hidden md:block mx-auto">
				<ResponsiveImage
					publicId={"kingdom-744.svg"}
					className="h-56"
					height={1000}
				/>
			</div>
			<div className="col-span-12 block md:hidden mt-12">
				<div className="grid grid-cols-12 items-center gap-4 justify-between">
					<div className="col-span-3 mx-auto">
						<ResponsiveImage
							publicId={"kingdom-4.svg"}
							className="h-auto md:h-56"
							height={1000}
						/>
					</div>
					<div className="col-span-6 mx-auto">
						<button className="bg-red-principal rounded shadow font-bold text-sm py-4 px-4 text-white">VER DEMOSTRACIÓN</button>
					</div>
					<div className="col-span-3 mx-auto">
						<ResponsiveImage
							publicId={"kingdom-744.svg"}
							className="h-auto md:h-56"
							height={1000}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}