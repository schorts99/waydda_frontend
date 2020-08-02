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

export default function PlaceCover({data}) {
	const {cover, name, addressState, address, reviews, slug,  profile} = data;
	return (
		<>
			<div className="grid grid-cols-12 h-full relative">
				<BackgroundImageResponsive
					src={GetImageUrl({publicId: cover, width: 1200, height: 400, fit: "cover", bgColor: "#fafafa"})}
					placeholder={GetImageUrl({publicId: cover, width: 100, height: 10, fit: "cover", bgColor: "#fafafa"})}
					imageClassName={"md:rounded-b rounded-none"}
					className="col-span-12 md:h-full bg-gray-700 w-full rounded-none md:rounded-b h-32"
				/>
				<div
					className="md:bg-black md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 w-full h-full z-30 md:bg-opacity-50 col-span-12">
					<PlaceDescription
						reviews={reviews}
						name={name}
						address={address}
						addressState={addressState}
						logo={profile}
						slug={slug}
					/>
				</div>
			</div>
		</>
	)
}


PlaceCover.propTypes = {
	data: PropTypes.object.isRequired
}
