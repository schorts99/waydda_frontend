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

import ResponsiveImage from "../../ResponsiveImage";

export default function ProductItem() {
	return (
		<div className="grid grid-cols-12 items-center gap-4 mx-2 pb-6 mb-6 border-b">
			<div className="col-span-4 items-center flex">
				<ResponsiveImage
					publicId={"fresh-and-delicious.jpg"}
					height={500}
					className="rounded shadow"
					wrapperClass="h-full"
				/>
			</div>
			<div className="col-span-8">
				<h4 className="font-bold">Carne sabrosa sin sangre</h4>
				<h5 className="text-xs text-gray-700 my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
				<h6 className="text-sm font-bold">MXN 45.00</h6>
			</div>
		</div>
	)
}