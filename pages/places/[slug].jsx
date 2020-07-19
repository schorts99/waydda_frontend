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


import LayoutUnAuthenticated from "../../components/Layouts/Unauthenticated";
import PlacePresentation from "../../components/Places/Presentation";
import ListAllProducts from "../../components/Places/ListAllProducts";

export default function PlacePage() {
	return (
		<LayoutUnAuthenticated
			moreSpaceInFooter
			withHeader={false}
			head={{title: "Demo", description: "Conoce el menú de Demo en Waydda"}}>
			<PlacePresentation>
				<ListAllProducts/>
			</PlacePresentation>
		</LayoutUnAuthenticated>
	)
}