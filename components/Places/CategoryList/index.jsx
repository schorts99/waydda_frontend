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

import Category from "../Category";
import {Element} from "react-scroll";
import ProductItem from "../ProductItem";
import {trackWindowScroll} from "react-lazy-load-image-component";

function CategoryList({count, label, name, products, scrollPosition, setModalData}) {
	return (
		<>
			<Element name={name} className="col-span-12">
				<div className="grid grid-cols-12 md:gap-8">
					<div className="col-span-12 mt-6 mx-2 md:mx-0">
						<Category count={count} label={label} />
					</div>
					{products.map((product, i) => (
						<div className="col-span-12 md:col-span-4" key={i}>
							<ProductItem
								setModalData={setModalData}
								scrollPosition={scrollPosition}
								{...product}
							/>
						</div>
					))}
				</div>
			</Element>
		</>
	)
}

export default trackWindowScroll(CategoryList)
