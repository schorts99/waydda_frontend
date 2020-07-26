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

import CategoryList from "../CategoryList";
import Modal from '../../Modal'

export default function ListAllProducts({data}) {
	return (
		<div className="grid grid-cols-12 items-center bg-background">
			<div className="col-span-12 z-10 px-4 md:px-0 bg-white border-b">
				<div className="grid grid-cols-3 items-center py-4">
					<div className="col-span-2">
						<h1 className="text-lg font-bold uppercase">Todos los productos</h1>
					</div>
					<div className="col-span-1 text-right">
						<span className="text-sm text-gray-600 md:font-bold md:text-gray-700">
							{data.total} en total
						</span>
					</div>
				</div>
			</div>
			{data.categories.length > 0 && (
				<>
					<Modal>

					</Modal>
					{data.categories.map((category, i) => {
						if (category.items.length > 0) {
							return (
								<CategoryList
									key={i}
									name={category.name}
									products={category.items}
									count={category.total}
									label={category.label}
								/>
							)
						} else {
							return null
						}
					})}
				</>
			)}

		</div>
	)
}
