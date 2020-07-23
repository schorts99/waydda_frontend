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
import moment from 'moment';

export default function Review({stars, comment, date, user}) {
	return (
		<div className="grid grid-cols-12 gap-4 z-0 items-center pb-6 border-b mb-6">
			<div className="col-span-2 md:col-span-1">
				<ResponsiveImage
					className="rounded-full h-full"
					publicId={stars >= 4 ? "pablo-834.svg" : stars >= 3 && stars < 4 ? "flamenco-348.svg" : "arabica-85.svg"}
					wrapperClass="md:h-16 md:w-16 h-12 w-12"
				/>
			</div>
			<div className="col-span-10">
				<h3 className="font-bold mb-1">{user.name} <span
					className="text-xs text-gray-700 font-normal"> - {moment(date).fromNow()}</span></h3>
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
				<p className="text-gray-700 text-sm md:text-base">{comment}</p>
			</div>
		</div>
	)
}