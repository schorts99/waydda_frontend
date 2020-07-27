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

import PropTypes from 'prop-types'
import {Slide} from 'react-slideshow-image';
import AggregateItem from '../Aggregate/Item';
import ResponsiveImage from '../ResponsiveImage';

/**
 * Detailed info of product, including its aggregates options
 *
 * @param image publicID of the product images
 * @param id Identifier of the product
 * @param description Description of the product
 * @param price Price of the product
 * @param aggregates Array of the aggregates options
 * */
export default function ShowProduct({photo, description, name, price, aggregates}) {
	return (
		<div className="show_product_cover">
			<div className="slide-container">
				<Slide infinite pauseOnHover arrows={false}>
					{[true].map((_, index) => (
						<div className="each-slide" key={index}>
							<ResponsiveImage
								publicId={photo}
								alt={name}
								className="show_product_cover_image"
							/>
						</div>
					))}
				</Slide>
			</div>
			<div className={`p-4${aggregates.length > 0 ? ' border-b border-gray-600' : ''}`}>
				<div className="flex justify-between items-center">
					<h4 className="font-bold text-lg md:text-xl mb-1">
						{name}
					</h4>
					<p className="ml-4">
						${price}
					</p>
				</div>
				<p className="text-gray-800 text-sm md:text-base">
					{description}
				</p>
			</div>
			<div className="mb-3">
				{aggregates && aggregates.map((aggregate, index) => (
					<AggregateItem {...aggregate} key={index}/>
				))}
			</div>
		</div>
	);
}

ShowProduct.propTypes = {
	aggregates: PropTypes.array,
	description: PropTypes.string,
	name: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}

ShowProduct.defaultProps = {
	aggregates: [],
	name: "",
	photo: "places/default.png",
	price: 0
}