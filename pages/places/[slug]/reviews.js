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

import LayoutUnAuthenticated from "../../../components/Layouts/Unauthenticated";
import PlacePresentation from "../../../components/Places/Presentation";
import ListReviews from "../../../components/Places/ListReviews";
import demo from '../../../demo/index.json'

export default function Reviews() {
	return (
		<LayoutUnAuthenticated moreSpaceInFooter={true} withHeader={false}
		                       head={{
			                       title: "Reseñas de Demo",
			                       description: "Reseñas del servicio de Demo en Waydda",
			                       theme: "#000"
		                       }}>
			<PlacePresentation
				withSticky={false}
				data={{...demo}}
			>
				<ListReviews
					reviews={demo.reviews}
				/>
			</PlacePresentation>
		</LayoutUnAuthenticated>
	)
}