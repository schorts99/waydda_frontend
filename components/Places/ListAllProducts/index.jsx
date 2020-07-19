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
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import CategoryList from "../CategoryList";

export default function ListAllProducts() {
	return (
		<div className="grid grid-cols-12 items-center bg-background">
			<CategoryList name={"index"} count={12} label={"Carnes el mencho"}/>
			<CategoryList name={"products"} count={12} label={"Carnes el mencho"}/>
		</div>
	)
}