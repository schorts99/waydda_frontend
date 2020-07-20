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

import ResponsiveImage from "../ResponsiveImage";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

export default function Review({image, stars, comment, date, user}) {
	return (
		<div className="grid grid-cols-12 gap-4 z-0 items-center pb-6 border-b mb-6">
			<div className="col-span-2">
				<ResponsiveImage
					className="rounded-full h-full"
					publicId={stars >= 4 ? "pablo-834.svg" : stars >= 3 && stars < 4 ? "flamenco-348.svg" : "arabica-85.svg"}
					wrapperClass="h-12 w-12"
				/>
			</div>
			<div className="col-span-10">
				<h3 className="font-bold mb-1">{user.name} <span
					className="text-xs text-gray-700 font-normal"> - Hace 5 horas</span></h3>
				{/*<p className="my-2 text-xs text-gray-700" >El 12/11/20</p>*/}
				<Rating
					size={10}
					start={0}
					stop={5}
					emptySymbol={<AiOutlineStar color={"rgba(0,0,0,.4)"} size={16}/>}
					fullSymbol={<AiFillStar size={16}/>}
					initialRating={stars}
					fractions={2}
					readonly
				/>
			</div>
			<div className="col-span-12 mt-1">
				<p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi dicta
					explicabo
					natus voluptas voluptate. A, alias, deleniti esse fuga in ipsum magnam modi, molestiae nulla numquam officia
					quae quam?</p>
			</div>
		</div>
	)
}