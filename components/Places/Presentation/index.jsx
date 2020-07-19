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
import Container from "../../Container";
import PlaceMenu from "../../PlaceMenu";
export default function PlacePresentation() {
	return (
		<>
			<PlaceCover
				image={{
					src: "places/demo/woman-standing-at-the-cash-register-in-cafe.jpg"
				}}
			/>
			<Container>
				<PlaceMenu/>
			</Container>
		</>
	)
}