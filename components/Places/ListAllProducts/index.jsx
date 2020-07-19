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

import CategoryList from "../CategoryList";

export default function ListAllProducts() {
	return (
		<div className="grid grid-cols-12 items-center bg-background">
			<div className="col-span-12 z-10 px-4 bg-white border-b">
				<div className="grid grid-cols-3 items-center py-4">
					<div className="col-span-2">
						<h1 className="text-lg font-bold uppercase">Todos los productos</h1>
					</div>
					<div className="col-span-1 text-right">
						<span className="text-sm text-gray-600">
							18 en total
						</span>
					</div>
				</div>
			</div>
			<CategoryList name={"index"} count={12} label={"Carnes el mencho"}/>
			<CategoryList name={"products"} count={12} label={"Carnes el mencho"}/>
		</div>
	)
}