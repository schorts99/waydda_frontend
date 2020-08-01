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

// TODO: Add slider
import PropTypes from 'prop-types'
import GetImageUrl from "../../../lib";
import BackgroundImageResponsive from "../../BackgroundImageResponsive";
import PlaceDescription from "../Description";

export default function PlaceCover({image, name, addressState, address, reviews, slug, logo, profile}) {
	return (
		<>
			<div className="grid grid-cols-12 h-full relative">
				<BackgroundImageResponsive
					src={GetImageUrl({publicId: image.src, width: 1200, height: 400, fit: "cover", bgColor: "#fafafa"})}
					placeholder={GetImageUrl({publicId: image.src, width: 120, height: 20, fit: "cover", bgColor: "#fafafa"})}
					imageClassName={"md:rounded-b rounded-none"}
					className="col-span-12 h-full bg-gray-700 w-full rounded-none md:rounded-b"
				/>
				<div className="bg-black absolute top-0 bottom-0 left-0 right-0 w-full h-full z-30 bg-opacity-75">
					<PlaceDescription
						reviews={reviews}
						name={name}
						address={address}
						addressState={addressState}
						logo={logo}
						slug={slug}
					/>
				</div>
			</div>
		</>
	)
}


PlaceCover.propTypes = {
	image: PropTypes.object.isRequired
}
