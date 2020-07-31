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
import {useState} from "react";
import PlaceHeader from "../../Headers/PlaceHeader";
import PlaceCover from "../Cover";
import PlaceMenu from "../../PlaceMenu";

export default function PlacePresentation({
	                                          children,
	                                          withSticky,
	                                          data: {
		                                          cover,
		                                          name,
		                                          addressState,
		                                          address,
		                                          reviews,
		                                          items,
		                                          profile,
		                                          slug,
	                                          },
                                          }) {
	const [activeItem, setActiveItem] = useState("");
	
	const onHandleReceive = (e) => {
		setActiveItem(e);
	};
	
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 z-40">
				<PlaceHeader/>
			</div>
			<div className="col-span-12 top-0 h-64 md:h-large w-full">
				<PlaceCover
					name={name}
					addressState={addressState}
					reviews={reviews}
					address={address}
					image={{src: cover}}
					slug={slug}
					logo={profile}
				/>
			</div>
			<div className="col-span-12 z-10 md:z-40 w-full mt-6">
				<div className="flex">
					<div className="w-11/12 mx-auto md:gap-6 flex" >
						<div className="w-3/12">
							<PlaceMenu items={items}
							           handleSendItem={() => {
							           }}
							           size={"desktop"}
							/>
						</div>
						<div className="w-9/12">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

PlacePresentation.propTypes = {
	children: PropTypes.any.isRequired,
	withSticky: PropTypes.bool.isRequired
}

PlacePresentation.defaultProps = {
	withSticky: true
}
