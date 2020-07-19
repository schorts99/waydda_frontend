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

import Container from "../../Container";
import Category from "../Category";
import ProductItem from "../ProductItem";

export default function ListAllProducts() {
	return (
		<div className="grid grid-cols-12 items-center bg-background">
			<div className="col-span-12 mt-6 mx-2">
				<Category count={12} label={"Carnes del mencho"}/>
			</div>
			<div className="col-span-12">
				<ProductItem/>
				<ProductItem/>
				<ProductItem/>
				<ProductItem/>
				<ProductItem/>
			</div>
		</div>
	)
}