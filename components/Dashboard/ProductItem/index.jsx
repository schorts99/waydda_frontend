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

import GetImageUrl from "../../../lib";

export default function AdminProductItem() {
	return (
		<div className="grid grid-cols-12 mb-4 bg-white rounded shadow">
			<div className="col-span-12 h-32 w-full bg-orange-200 rounded relative"
			     style={{
				     backgroundImage: `url(${GetImageUrl({
					     publicId: "fresh-and-delicious.jpg",
					     fit: "cover",
					     height: 500,
					     width: 1000,
					     bgColor: "#fff"
				     })})`,
				     backgroundPosition: "center",
				     backgroundSize: "cover",
				     backgroundRepeat: "no-repeat"
			     }}
			>
				<div className="absolute w-full bottom-0 bg-black px-3 py-3" >
					<p className="text-white text-xs font-bold" >45 visitas</p>
				</div>
			</div>
			<div className="col-span-12 py-3 px-3">
				<h2 className="font-bold text-lg text-base">Titulo de producto</h2>
				<p className="text-xs my-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
				<h4 className="font-bold uppercase mt-2">MXN 45</h4>
			</div>
		</div>
	)
}