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
import dynamic from "next/dynamic";
import PlaceHeader from "../../Headers/PlaceHeader";

const PlaceCover = dynamic(() => import('../Cover'), {
	ssr: true
});
const PlaceDescription = dynamic(() => import('../Description'), {
	ssr: true
});
const PlaceMenu = dynamic(() => import('../../PlaceMenu'), {
	ssr: true
});
const WhatsAppButton = dynamic(() => import('../../WhatsAppButton'), {
	ssr: false
});



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
		                                          whatsapp,
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
			<div className="col-span-12">
				<PlaceHeader/>
			</div>
			<div className="col-span-12">
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
			{withSticky &&
			<div className={`col-span-12 md:hidden z-20 ${withSticky ? "sticky top-0" : ""} ${activeItem ? "shadow" : ""}`}>
				<div
					className={`flex w-full mx-auto bg-white`}>
					{/*className={`col-span-12 md:hidden z-20 ${activeItem ? "shadow" : ""} bg-white ${withSticky ? "sticky top-0" : ""}`}>*/}
					<div className="w-11/12 mx-auto">
						<PlaceMenu
							items={items}
							handleSendItem={onHandleReceive}
						/>
					</div>
				</div>
			</div>
			}
			<div className="col-span-12 z-10 md:z-20">
				<div className="flex w-11/12 mx-auto md:-mt-32">
					<div className="grid grid-cols-12  w-full">
						<div className="col-span-12 hidden md:block">
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
				</div>
				{
					withSticky &&
					<div
						className={`flex w-full hidden md:block mx-auto bg-white z-20 ${withSticky ? "sticky top-0" : ""} ${activeItem ? "shadow" : ""}`}>
						<div className="w-11/12 mx-auto">
							<PlaceMenu
								items={items}
								handleSendItem={onHandleReceive}
							/>
						</div>
					</div>
				}
				<div className="flex w-11/12 mx-auto">
					<div className="grid grid-cols-12 w-full">
						<div className="col-span-12">
							{children}
						</div>
					</div>
				</div>
			
			</div>
			{whatsapp && <WhatsAppButton data={whatsapp}/>}
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
