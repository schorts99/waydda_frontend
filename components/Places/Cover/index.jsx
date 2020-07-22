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
import Link from "next/link";

export default function PlaceCover({image, name, city, address, reviews}) {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 md:col-span-10 md:col-start-2 h-56 md:h-64 bg-orange-200">
				<ResponsiveImage
					className="md:rounded-b md:h-full"
					byDefault
					publicId={image.src}
					height={700}
					address={address}
					srcsetSizes={{
						w_480: {
							height: 600,
							width: 1000
						},
						w_1082: {
							height: 400,
							width: 2000
						},
						w_1523: {
							height: 400,
							width: 2000
						},
						w_1920: {
							height: 400,
							width: 2000
						}
					}}
					fit={"cover"}
				/>
			</div>
			<div
				className="col-span-12 md:col-span-12 md:col-start-2 md:px-0 md:pt-4 bg-white -mt-16 md:mt-0 md:pb-8 pb-4 pt-6 px-4 rounded-t-lg z-20 rounded-t-large md:rounded-t-lg">
				<div className="grid grid-cols-12">
					<div className="col-span-12">
						<h2 className="text-3xl font-bold md:text-4xl">
							<Link href={"/places/[slug]"} as={"/places/demo"}>
								<a>{name}</a>
							</Link>
						</h2>
						<h4 className="text-gray-700 mt-2 text-sm md:text-base">{city}&#160;&bull;&#160;{address}</h4>
					</div>
					<div className="col-span-12 mt-5">
						<div className="grid grid-cols-2 gap-2 items-end">
							<Item
								text={`${reviews.total} (${reviews.count} reseñas)`}
								// text={"3.6 (10 reseñas)"}
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
							<div className="col-span-1 text-right">
								<Link href="/places/[slug]/reviews" as={"/places/demo/reviews"}>
									<a className="font-bold text-xs pt-2 md:text-sm">Ver reseñas</a>
								</Link>
							</div>
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
				<p className="text-xs md:text-sm text-gray-600">{text}</p>
			</div>
		</div>
	</div>
)

PlaceCover.propTypes = {
	image: PropTypes.object.isRequired
}