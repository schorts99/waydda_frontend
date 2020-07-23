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
import demo from '../../../demo/index.json'
import dynamic from 'next/dynamic'

const ListReviews = dynamic(() => import('../../../components/Places/ListReviews'))
const ContactForm = dynamic(() => import('../../../components/Places/ContactForm'))

export default function Reviews() {
	return (
		<LayoutUnAuthenticated
			pixel={"689265355254424"}
			moreSpaceInFooter={true} withHeader={false}
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
				<ContactForm/>
			</PlacePresentation>
		</LayoutUnAuthenticated>
	)
}