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
import PlaceCover from "../Cover";
import PlaceMenu from "../../PlaceMenu";
export default function ContentPresentation({
	                                            addressState,
	                                            reviews,
	                                            address,
	                                            cover,
	                                            slug,
	                                            withSticky,
	                                            activeItem,
	                                            items,
	                                            onHandleReceive,
	                                            whatsapp
                                            }) {
	return (
		<>
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
			{whatsapp && <WhatsAppButton data={whatsapp}/>}
		</>
	)
}