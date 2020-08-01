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
import dynamic from "next/dynamic";

const PlacePresentation = dynamic(() => import('../Presentation'), {
	ssr: false,
	loading: () => (<p>CARGANDOOOOOO.....</p>)
});
export default function MainPlace({data, slug}) {
	return (
		<>
			<div className={"grid grid-cols-12"}>
				<div className="col-span-12 top-0 h-auto md:h-large w-full">
					<PlaceCover
						name={data.getBusiness.name}
						addressState={data.getBusiness.addressState}
						reviews={data.getBusiness.reviews}
						address={data.getBusiness.address}
						image={{src: data.getBusiness.cover}}
						slug={slug}
						logo={data.getBusiness.profile}
					/>
				</div>
			</div>
			<PlacePresentation data={data.getBusiness}/>
			{/*<ContactPlace*/}
			{/*	data={data.getBusiness}*/}
			{/*/>*/}
		</>
	)
}