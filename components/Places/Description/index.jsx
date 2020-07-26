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

import Link from "next/link";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

export default function PlaceDescription({reviews, address, city, name}) {
	return (
		<div className="grid grid-cols-12">
			<div
				className="col-span-12 md:px-0 md:pt-4 bg-white -mt-16 md:mt-0 md:pb-8 pb-4 pt-6 px-4 rounded-t-lg z-20 rounded-t-large md:rounded-t-lg">
				<div className="grid grid-cols-12">
					<div className="col-span-12">
						<h2 className="text-3xl font-bold md:text-4xl">
							<Link href={"/places/[slug]"} as={"/places/demo"}>
								<a>{name}</a>
							</Link>
						</h2>
						<h4 className="text-gray-700 mt-2 text-sm md:text-base md:font-bold md:text-black">{city}<span className="md:block md:font-normal md:mt-1" ><span className="md:hidden md:font-normal" >&#160;&bull;&#160;</span>{address}</span></h4>
					</div>
					<div className="col-span-12 mt-5">
						<div className="grid grid-cols-2 md:grid-cols-6 gap-2 items-end">
							<Item
								text={`${reviews.total} (${reviews.count} reseñas)`}
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
							<div className="col-span-1 md:col-span-6 text-right md:text-left">
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
	<div className="col-span-1 md:col-span-6">
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
