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
import GetImageUrl from "../../../lib";
import BackgroundImageResponsive from "../../BackgroundImageResponsive";
import PlaceDescription from "../Description";

export default function PlaceCover({image, name, city, address, reviews}) {
	return (
		<>
			<div className="grid grid-cols-12">
				<BackgroundImageResponsive
					src={GetImageUrl({publicId: image.src})}
					placeholder={GetImageUrl({publicId: image.src, width: 50, height: 50})}
					imageClassName={"md:rounded-b h-full rounded-none"}
					className={"col-span-12 md:col-span-10 md:col-start-2 h-56 md:h-64 bg-orange-200 w-full rounded-none md:rounded-b"}
				/>
				<div className="col-span-12 md:hidden">
					<PlaceDescription
						reviews={reviews}
						city={city}
						name={name}
						address={address}
					/>
				</div>
			</div>
		</>
	)
}


PlaceCover.propTypes = {
	image: PropTypes.object.isRequired
}