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

import Category from "../Category";
import {Element} from "react-scroll";
import ProductItem from "../ProductItem";

export default function CategoryList({count, label, name}) {
	return (
		<>
			<Element name={name} className="col-span-12">
				<div className="col-span-12 mt-6 mx-2">
					<Category count={12} label={"Carnes del mencho"}/>
				</div>
				<ProductItem/>
				<ProductItem/>
				<ProductItem/>
				<ProductItem/>
				<ProductItem/>
			</Element>
		</>
	)
}