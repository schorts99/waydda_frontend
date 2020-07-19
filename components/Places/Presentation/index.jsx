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

import PlaceCover from "../Cover";
import PlaceMenu from "../../PlaceMenu";

export default function PlacePresentation({children}) {
	return (
		<div className="grid grid-cols-12 ">
			<div className="col-span-12">
				<PlaceCover
					image={{
						src: "places/demo/woman-standing-at-the-cash-register-in-cafe.jpg"
					}}
				/>
			</div>
			<div className="col-span-12 sticky top-0 shadow z-20 bg-white">
				<PlaceMenu/>
			</div>
			<div className="col-span-12">
				{children}
			</div>
		</div>
	)
}