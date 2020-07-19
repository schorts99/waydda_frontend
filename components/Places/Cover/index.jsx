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
// TODO: Add slider
import PropTypes from 'prop-types'
import ResponsiveImage from "../../ResponsiveImage";
import Rating from 'react-rating';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'

export default function PlaceCover({image}) {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 h-56 bg-orange-200">
				<ResponsiveImage
					byDefault
					publicId={image.src}
					height={700}
					srcsetSizes={{
						w_480: {
							height: 600,
							width: 1000
						},
						w_1082: {
							height: 1000,
							width: 2000
						},
						w_1523: {
							height: 1000,
							width: 2000
						},
						w_1920: {
							height: 350,
							width: 2000
						}
					}}
					fit={"cover"}
				/>
			</div>
			<div
				className="col-span-12 bg-white -mt-16 md:pt-12 md:pb-8 pb-4 pt-6 px-8 md:px-16 rounded-t-lg z-20 rounded-t-large md:rounded-t-full">
				<div className="grid grid-cols-12">
					<div className="col-span-12">
						<h1 className="text-3xl font-bold">Restaurante perro</h1>
						<h4 className="text-gray-700 mt-2 text-sm">Oaxaca&#160;&bull;&#160;Avenida los jepos 101</h4>
					</div>
					<div className="col-span-12 mt-5">
						<div className="grid grid-cols-3 gap-2 items-center">
							<Item
								text={"3.6 (10 reseñas)"}
							>
								<Rating
									size={10}
									start={0}
									stop={5}
									emptySymbol={<AiOutlineStar size={16}/>}
									fullSymbol={<AiFillStar size={16}/>}
									initialRating={3.6}
									fractions={2}
									readonly
								/>
							</Item>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Item = ({children, text}) => (
	<div className="col-span-1">
		<div className="grid grid-cols-1">
			<div className="col-span-1 h-6 items-center flex">
				{children}
			</div>
			<div className="col-span-1 mt-2">
				<p className="text-xs text-gray-600">{text}</p>
			</div>
		</div>
	</div>
)

PlaceCover.propTypes = {
	image: PropTypes.object.isRequired
}