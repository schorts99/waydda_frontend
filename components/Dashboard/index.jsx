/*
 *  Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *
 *  Proprietary and confidential
 *
 *  Written by AzaChii <hello@azachii.dev>, July 2020
 *
 *  https://azachii.dev/
 *
 *  LICENSE file in the root directory of this source tree.
 */

import ProductItem from "../Places/ProductItem";
import ListReviews from "../Places/ListReviews";

export default function ListLastActivity() {
	return (
		<div className="grid grid-cols-12 py-5">
			<div className="col-span-12 px-4 mb-6 border-b pb-4">
				<h1 className="font-bold text-2xl">Productos más vistos</h1>
			</div>
			<div className="col-span-12">
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12">
						<ProductItem views={23}/>
					</div>
					<div className="col-span-12">
						<ProductItem views={1}/>
					</div>
				</div>
			</div>
			<div className="col-span-12">
				<h1 className="font-bold text-2xl px-4 mb-6 pb-4 border-b">Últimas reseñas</h1>
				<ListReviews withTitle={false}/>
			</div>
		</div>
	)
}
